import EventEmitter from "events"

export default class Sizes extends EventEmitter{
    constructor(){
        super()
        this.height = window.innerHeight
        this.width = window.innerWidth
        this.aspectRatio = this.width/this.height
        this.pixelRatio = Math.min(window.devicePixelRatio,2)

        window.addEventListener('resize',()=>{
            this.height = window.innerHeight;
            this.width = window.innerWidth;
            this.aspectRatio = this.width / this.height;
            this.pixelRatio = Math.min(window.devicePixelRatio, 2);
            this.emit('resize')
        })
    }
}