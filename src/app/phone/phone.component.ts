import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, OnDestroy, HostListener} from '@angular/core';
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  standalone: true,
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;


  //* Phone Properties
  @Input() public rotationSpeedX: number = 0.03;
  @Input() public rotationSpeedY: number = 0.02;
  @Input() public size: number = 250;
  @Input() public modelPath: string = 'assets/phone/scene.gltf';

  //* Stage Properties
  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 20;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;

  //? Helper Properties (Private Properties);
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private model!: THREE.Group; // Use THREE.Group to hold the loaded GLTF model
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  // Default rotation values
  private defaultRotationX = 0;
  private defaultRotationY = Math.PI;
  private snappingBack = false;
  private rotationFactor = 0.1;

  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.add(this.model);
    //* Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
    directionalLight.position.set(0, 1.1, 1);
    this.scene.add(directionalLight);
    //* Camera
    let aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      aspectRatio,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.z = this.cameraZ;
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
   * Load the model
   *
   * @private
   * @memberof PhoneComponent
   */
  private loadGLTFModel() {
    const loader = new GLTFLoader();
    loader.load(this.modelPath, (gltf) => {
      this.model = gltf.scene;
      this.scene.add(this.model); // Add the model to the scene
      // Optionally set the model's scale, position, etc., here
      this.model.scale.set(this.size, this.size, this.size);
      this.model.rotation.x = this.defaultRotationX;
      this.model.rotation.y = this.defaultRotationY;
    }, undefined, (error) => {
      console.error(error);
    });
  }

  /**
   * Add toggled mouse move and mouse up listeners
   *
   * @private
   * @memberof CubeComponent
   */
  private addMouseControls() {
    let lastMouseX = 0;
    let lastMouseY = 0;
    const mouseDown = (event: MouseEvent) => {
      lastMouseX = event.clientX;
      lastMouseY = event.clientY;
      document.addEventListener('mousemove', mouseMove);
      document.addEventListener('mouseup', mouseUp);
    };
    const mouseMove = (event: MouseEvent) => {
      const deltaX = event.clientX - lastMouseX;
      const deltaY = event.clientY - lastMouseY;
      this.model.rotation.y += deltaX * 0.02;
      this.model.rotation.x += deltaY * 0.02;
      lastMouseX = event.clientX;
      lastMouseY = event.clientY;
    };
    const mouseUp = () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
      this.snappingBack = true;
    };
    this.renderer.domElement.addEventListener('mousedown', mouseDown);
  }

  /**
   * Start the rendering loop
   *
   * @private
   * @memberof PhoneComponent
   */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: PhoneComponent = this;
    (function render() {
      requestAnimationFrame(render);
      if (component.snappingBack) {
        component.smoothSnapToDefaultRotation();
      }
      component.renderer.render(component.scene, component.camera);
    }());
  }

  private smoothSnapToDefaultRotation() {
    this.model.rotation.x += (this.defaultRotationX - this.model.rotation.x) * this.rotationFactor;
    this.model.rotation.y += (this.defaultRotationY - this.model.rotation.y) * this.rotationFactor;

    if (Math.abs(this.model.rotation.x - this.defaultRotationX) < 0.01 &&
      Math.abs(this.model.rotation.y - this.defaultRotationY) < 0.01
    ) {
      this.model.rotation.x = this.defaultRotationX;
      this.model.rotation.y = this.defaultRotationY;
      this.snappingBack = false;
    }
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.loadGLTFModel();
    this.createScene();
    this.startRenderingLoop();
    this.addMouseControls();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.camera.aspect = this.getAspectRatio();
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }
}
