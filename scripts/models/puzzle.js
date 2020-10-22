class Puzzle{
  constructor(vector){
    this.position = createVector(vector.x, vector.y, vector.z)
    this.color = colors.bass
    this.theta = Math.PI
    this.phi = constants.puzzle.width/1.618
  }
  render(){
    push()
    fill(this.color)
    translate(this.position.x, this.position.y, this.position.z)
    rotateY(this.theta)
    rectMode(CENTER)
    //square
      rect(0,0,constants.puzzle.width,constants.puzzle.width)
    //top lip
      push()
      translate(this.phi - .5*constants.puzzle.width, -.5*constants.puzzle.width, 0)
      rect(0, 0, 5, 10 )
      translate(0, -5, 0)
      circle(0,0,7)
      pop()
    //right lip
      push()
      translate(.5*constants.puzzle.width, this.phi - .5*constants.puzzle.width, 0)
      rect(0, 0, 10, 5 )
      translate(5, 0, 0)
      circle(0,0,7)
      pop()
    //bottom lip
      push()
      translate(-this.phi + .5*constants.puzzle.width, .5*constants.puzzle.width, 0)
      rect(0, 0, 5, 10 )
      translate(0, 5, 0)
      circle(0,0,7)
      pop()
      //left lip
      push()
      translate(-.5*constants.puzzle.width, -this.phi + .5*constants.puzzle.width, 0)
      rect(0, 0, 10, 5 )
      translate(-5, 0, 0)
      circle(0,0,7)
      pop()

pop()
    this.theta += constants.coin.rotationIncrement
    this.theta %= 2*Math.PI
  }
}
