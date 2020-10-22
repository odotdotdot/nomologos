class Hurdle extends Obstacle{
  constructor(vector, minH= 0){
    //call super to get color and position.  we can ignore size.
    super(vector);
    this.height = minH +  Math.random() * (constants.hurdles.height.max - constants.hurdles.height.min) + constants.hurdles.height.min
    this.width = Math.random() * (constants.hurdles.width.max - constants.hurdles.width.min) + constants.hurdles.width.min
    this.position.y = 0
    this.baseColor = obstacleColors[Object.keys(obstacleColors)[Math.floor(Math.random()*Object.keys(obstacleColors).length)]]
    this.topColor = obstacleColors[Object.keys(obstacleColors)[Math.floor(Math.random()*Object.keys(obstacleColors).length)]]
    this.type = 'hurdle'
  }

  render(){
    push()
    fill(this.baseColor)
    translate(this.position.x, this.position.y - .5*this.height, this.position.z)
    cylinder(this.width, this.height)
    fill(this.topColor)
    translate(0, -.5*this.height, -constants.hurdles.stock.r)
    cylinder(this.width + 10, constants.hurdles.stock.r)
    pop()

  }
}
