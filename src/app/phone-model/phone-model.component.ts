// import {AfterViewInit, Component, ElementRef, Input, input, OnInit, ViewChild} from '@angular/core';
// import * as THREE from "three";
//
// @Component({
//   selector: 'app-phone-model',
//   standalone: true,
//   imports: [],
//   templateUrl: './phone-model.component.html',
//   styleUrl: './phone-model.component.css'
// })
// export class PhoneModelComponent implements OnInit, AfterViewInit{
//   @ViewChild('canvas');
//   private canvasRef: ElementRef;
//
//   // Cube Properties
//   @Input() public rotationSpeedX: number = 0.05;
//   @Input() public rotationSpeedY: number = 0.01;
//   @Input() public size: number = 200;
//   @Input() public texture: string = '/assets/cube_texture.jpg';
//
//   // Stage Properties
//   @Input() public cameraZ: number = 400;
//   @Input() public fieldOfView: number = 1;
//   @Input('nearClipping') public nearClippingPlane: number = 1;
//   @Input('farClipping') public farClippingPlane: number = 1000;
//
//   // Helper Properties (Private Properties)
//   private camera!: THREE.PerspectiveCamera;
//   private get canvas(): HTMLCanvasElement {
//     return this.canvasRef.nativeElement;
//   }
//   private loader = new THREE.TextureLoader();
//   private geometry = new THREE.BoxGeometry(1, 1, 1);
//   private material = new THREE.MeshLambertMaterial({ map: this.loader.load(this.texture) });
//
//   private cube: THREE.Mesh = new THREE.Mesh(this.geometry, this.material);
//   private renderer!: THREE.WebGLRenderer;
//   private scene!: THREE.Scene;
//
//   private cube: THREE.Mesh = new THREE.Mesh(this.geometry)
//
//   /**
//    * Create the scene
//    *
//    * @private
//    * @memberof CubeComponent
//    */
//   private createScene() {
//     // Scene
//     this.scene = new THREE.Scene();
//     this.scene.background = new THREE.Color(0x000000);
//     this.scene.add(this.cube);
//     // Camera
//     let aspectRatio = this.getAspectRatio();
//     this.camera = new THREE.PerspectiveCamera(
//       this.fieldOfView,
//       aspectRatio,
//       this.nearClippingPlane,
//       this.farClippingPlane
//     );
//     this.camera.position.z = this.cameraZ;
//   }
//
//   private getAspectRatio() {
//     return this.canvas.clientWidth / this.canvas.clientHeight;
//   }
//
//   /**
//    * Animate the cube
//    *
//    * @private
//    * @memberof CubeComponent
//    */
//   private animateCube() {
//     this.cube.rotation.x = this.rotationSpeedX;
//     this.cube.rotation.y = this.rotationSpeedY;
//   }
//
//   /**
//    * Start the rendering loop
//    *
//    * @private
//    * @memberof CubeComponent
//    */
//   private startRenderingLoop() {
//     // Renderer
//     // Use the canvas element in template
//     this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
//     this.renderer.setPixelRatio(devicePixelRatio);
//     this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
//
//     let component: CubeComponent = this;
//     (function render() {
//       requestAnimationFrame(render);
//       component.animateCube();
//       component.renderer.render(component.scene, component.camera);
//     }());
//   }
// }
