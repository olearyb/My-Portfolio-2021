/* eslint-disable */

// circle Class
export default class Circle {
    // setup function
    constructor(color, canvas) {
      //the objects setup
      // 'this' is a reference to the current class

      //this.points = []
      this._color = color
      this.canvas = canvas
    }
    /*
    init() {
      for (let i = 0; i < this.numPoints; i++) {
        let point = new Point(this.divisional * (i + 1), this)
        //point.acceleration = -1 + Math.random() * 2;
        this.push(point)
      }
    }
    */
    render() {
      let canvas = this.canvas
      let ctx = this.ctx
      let position = this.position
      let pointsArray = this.points
      let radius = this.radius
      let points = this.numPoints
      let divisional = this.divisional
      let center = this.center
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      /*
      pointsArray[0].solveWith(pointsArray[points - 1], pointsArray[1])
      let p0 = pointsArray[points - 1].position
      let p1 = pointsArray[0].position
      let _p2 = p1
        */

      // this is the draw
      ctx.beginPath()
      ctx.arc(center.x, center.y,radius, 0, Math.PI * 2, false )
      ctx.closePath()
    
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.strokeStyle = this.color
      // ctx.stroke();
  
      /*
      ctx.fillStyle = '#000000';
      if(this.mousePos) {
      let angle = Math.atan2(this.mousePos.y, this.mousePos.x) + Math.PI;
      ctx.fillRect(center.x + Math.cos(angle) * this.radius, center.y + Math.sin(angle) * this.radius, 5, 5);
      }*/
      requestAnimationFrame(this.render.bind(this))
    }
  
    push(item) {
      if (item instanceof Point) {
        this.points.push(item)
      }
    }
    set color(value) {
      this._color = value
    }
    get color() {
      return this._color
    }
    set canvas(value) {
      if (
        value instanceof HTMLElement &&
        value.tagName.toLowerCase() === "canvas"
      ) {
        this._canvas = canvas
        this.ctx = this._canvas.getContext("2d")
      }
    }
    get canvas() {
      return this._canvas
    }
    set numPoints(value) {
      if (value > 2) {
        this._points = value
      }
    }
    get numPoints() {
      return this._points || 32
    }
    set radius(value) {
      if (value > 0) {
        this._radius = value
      }
    }
    get radius() {
      return this._radius || 50
    }
    set position(value) {
      if (typeof value == "object" && value.x && value.y) {
        this._position = value
      }
    }
    get position() {
      return this._position || { x: 0.5, y: 0.5 }
    }
    get divisional() {
      return Math.PI * 2 / this.numPoints
    }
    get center() {
      return {
        x: this.canvas.width * this.position.x,
        y: this.canvas.height * this.position.y,
      }
    }
    set running(value) {
      this._running = value === true
    }
    get running() {
      return this.running !== false
    }
  }
  
  