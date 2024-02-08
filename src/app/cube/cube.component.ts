import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild, HostListener, OnDestroy} from '@angular/core';
import * as THREE from "three";

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  standalone: true,
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  //* Cube Properties
  @Input() public rotationSpeedX: number = 0.015;
  @Input() public rotationSpeedY: number = 0.01;
  @Input() public rotationMultiplier: number = 0.5;
  @Input() public size: number = 2;
  @Input() public texture: string = "assets/society_logo.jpg";

  //* Stage Properties
  @Input() public cameraZ: number = 400;
  @Input() public fieldOfView: number = 20;
  @Input('nearClipping') public nearClippingPlane: number = 1;
  @Input('farClipping') public farClippingPlane: number = 1000;

  //* Inertia properties
  private rotationVelocityX = 0;
  private rotationVelocityY = 0;
  private mouseUp = true;

  //? Helper Properties (Private Properties);
  private camera!: THREE.PerspectiveCamera;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private loader = new THREE.TextureLoader();
  private geometry = new THREE.BoxGeometry(20, 20, 20);
  private material = new THREE.MeshLambertMaterial({ map: this.loader.load(this.texture) });

  private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;

  /**
   * Animate the cube
   *
   * @private
   * @memberof CubeComponent
   */
  private animateCube() {
    if (this.mouseUp) {
      this.rotationVelocityX *= 0.95;
      this.rotationVelocityY *= 0.95;

      if (Math.abs(this.rotationVelocityX) < 0.001) this.rotationVelocityX = 0;
      if (Math.abs(this.rotationVelocityY) < 0.001) this.rotationVelocityY = 0;

      this.cube.rotation.x += this.rotationVelocityX;
      this.cube.rotation.y += this.rotationVelocityY;

      this.cube.rotation.x += this.rotationSpeedX;
      this.cube.rotation.y += this.rotationSpeedY;
    } else {
      this.cube.rotation.x += this.rotationSpeedX * this.rotationMultiplier;
      this.cube.rotation.y += this.rotationSpeedY * this.rotationMultiplier;
    }
  }

  /**
   * Create the scene
   *
   * @private
   * @memberof CubeComponent
   */
  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000)
    this.scene.add(this.cube);
    //* Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1);
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

    //* Cube size
    this.cube.scale.set(this.size, this.size, this.size);
  }

  private getAspectRatio() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
   * Start the rendering loop
   *
   * @private
   * @memberof CubeComponent
   */
  private startRenderingLoop() {
    //* Renderer
    // Use canvas element in template
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: CubeComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
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
    let currentTime = 0;
    let lastTime = 0;
    let deltaTime = 0;
    const mouseDown = (event: MouseEvent) => {
      lastMouseX = event.clientX;
      lastMouseY = event.clientY;
      this.mouseUp = false;
      document.addEventListener('mousemove', mouseMove);
      document.addEventListener('mouseup', mouseUp);
      lastTime = performance.now();
    };

    const mouseMove = (event: MouseEvent) => {
      const deltaX = event.clientX - lastMouseX;
      const deltaY = event.clientY - lastMouseY;

      currentTime = performance.now();
      deltaTime = currentTime - lastTime;
      if (deltaTime != 0) {
        this.rotationVelocityX = (deltaY * 2) / deltaTime;
        this.rotationVelocityY = (deltaX * 2) / deltaTime;
      }

      this.cube.rotation.y += deltaX * 0.02;
      this.cube.rotation.x += deltaY * 0.02;
      lastMouseX = event.clientX;
      lastMouseY = event.clientY;
    };

    const mouseUp = () => {
      this.mouseUp = true;
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseup', mouseUp);
    };
    this.renderer.domElement.addEventListener('mousedown', mouseDown);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
    this.addMouseControls();
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(_: Event) {
    this.updateCanvasSize();
  }

  private updateCanvasSize() {
    const width = this.canvas.clientWidth;
    const height = this.canvas.clientHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix();
  }
}
