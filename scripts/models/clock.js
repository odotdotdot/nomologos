class Clock{
  constructor(vector){
    this.position = createVector(vector.x, vector.y, vector.z)
    this.theta = Math.PI
    this.hourTheta = 0
    this.minuteTheta = 0

  }
  render(){
    push()
    translate(this.position.x, this.position.y, this.position.z)
    rotateY(this.theta)
    fill(colors.dark)
    ellipsoid(constants.clock.radius, constants.clock.radius, constants.clock.depth)
    fill(colors.alto)
    translate(0, 0, constants.clock.depth)
    circle(0,0, 2*constants.clock.radius - 4)
    stroke(colors.tenor)
    strokeWeight(1.5)

    var hourHand = createVector(Math.cos(this.hourTheta), Math.sin(this.hourTheta))
    var minuteHand = createVector(Math.cos(this.minuteTheta), Math.sin(this.minuteTheta))
    var hour = p5.Vector.mult(hourHand, constants.clock.radius - 12 )
    var minute = p5.Vector.mult(minuteHand, constants.clock.radius - 4 )
    line(0,0,hour.x, hour.y)
    line(0,0,minute.x, minute.y)
    pop()
    this.theta += constants.coin.rotationIncrement
    this.theta %= 2*Math.PI
    this.minuteTheta += (2*Math.PI/360) % (2*Math.PI)
    this.hourTheta += (2*Math.PI/360/60) % (2*Math.PI)
  }
}
