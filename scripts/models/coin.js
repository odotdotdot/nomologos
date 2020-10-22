class Coin{
  constructor(vector, offset){
    switch (offset){
      case 'right':
        vector.x += constants.coin.xOffset
      case 'left':
        vector.x -= constants.coin.xOffset
      case 'above':
        vector.y -= constants.coin.yOffset
      default:
        this.position = vector
    }
    this.color = colors.leverkuhn
    this.theta = 0
  }

  render(){
    push()
    fill(this.color)
    translate(this.position.x, this.position.y, this.position.z)
    rotateY(this.theta)
    torus(constants.coin.radius, constants.coin.tubeRadius)
    pop()
    this.theta += constants.coin.rotationIncrement
    this.theta %= 2*Math.PI
  }
}
