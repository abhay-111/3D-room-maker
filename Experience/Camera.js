import Experience from "./Experience";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.sizes = this.experience.sizes;
    this.canvas = this.experience.canvas;

    this.createPerspectiveCamera();
    this.setOrbitControls()
    this.perspectiveCamera.position.z = 80;
    this.perspectiveCamera.position.y=30
  }
  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      35,
      this.sizes.aspectRatio,
      0.1,
      1000
    );
  }
  setOrbitControls() {
    this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.enableZoom = true;
  }
  resize() {
    this.perspectiveCamera.aspect = this.sizes.aspectRatio;
  }
  update() {
    // this.renderer.render(this.scene, this.camera.perspectiveCamera);
    this.controls.update()
  }
}
