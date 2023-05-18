import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Camera from "./Camera";
import Time from "./Utils/Time";
import Renderer from './Renderer'
import World from "./World/World";
import Resources from "./Utils/Resources";
import assets from './Utils/assets.js'
import Environment from "./World/Environment";
export default class Experience {
  static instance;
  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance;
    }
    Experience.instance = this;
    this.canvas = canvas;
    this.sizes = new Sizes();
    this.scene = new THREE.Scene();
    this.camera = new Camera();
    this.time = new Time()
    this.renderer = new Renderer();
    this.resources = new Resources(assets)
    this.environment = new Environment()
    this.resources.on('ready',()=>{
      this.world = new World()
    })
    this.time.on("update",()=>{
        this.renderer.update()
        this.camera.update()
    });
    this.sizes.on('resize',()=>{
        this.camera.resize()
        this.renderer.resize()
    })
  }
}
