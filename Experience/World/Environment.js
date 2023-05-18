import Experience from "../Experience";
import * as THREE from "three";
export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.setSunLight();
  }
  setSunLight(){
    this.sunLight = new THREE.DirectionalLight('#FFFFFF',3)
    this.sunLight.castShadow = true
    this.sunLight.shadow.camera.far = 20;
    this.sunLight.shadow.mapSize.set(1024,1024)
    this.sunLight.shadow.normalBias =0.05
    this.sunLight.position.set(1.5,7,3)
    this.scene.add(this.sunLight)
  }
  resize() {}
  update() {}
}
