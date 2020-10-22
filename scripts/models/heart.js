class Heart{
  constructor(vector){
    this.position = vector
    this.color = colors.red
    this.crtl_low = createVector(27, 3)
    this.crtl_high = createVector(14, 23)
  }

  render(){
    push()
    fill(this.color)
    noStroke()
    translate(camera.centerX, camera.centerY, camera.centerZ)
    beginShape()
      vertex(this.position.x, this.position.y + 20)
      bezierVertex(
         this.position.x - this.crtl_low.x, this.position.y - this.crtl_low.y
        ,this.position.x - this.crtl_high.x,this.position.y - this.crtl_high.y
        ,this.position.x, this.position.y - 10)
    endShape()

    beginShape()
      vertex(this.position.x, this.position.y + 20)
      bezierVertex(
         this.position.x + this.crtl_low.x, this.position.y - this.crtl_low.y
        ,this.position.x + this.crtl_high.x,this.position.y - this.crtl_high.y
        ,this.position.x, this.position.y - 10)
    endShape()
    pop()
  }
  
}
