class Wall{
  constructor(z){
    this.depth = Math.random() * (constants.wall.depth.max - constants.wall.depth.min) + constants.wall.depth.min
    this.height = Math.random() * (constants.wall.height.max - constants.wall.height.min) + constants.wall.height.min
    this.segments = utility.getRandomInt(7)
    this.segColors = []
    for(var i = 0; i < this.segments; i ++)
      this.segColors[i] = obstacleColors[Object.keys(obstacleColors)[Math.floor(Math.random()*Object.keys(obstacleColors).length)]]
    this.skip = utility.getRandomInt(this.segments)
    this.z = z
    this.type = 'wall'
    var segW = width/this.segments
    this.position = createVector(-.5*width + this.skip*segW + .5*segW
                    , 0
                    , this.z)
  }
  render(){
    push()
    translate(-.5*width, -.5*this.height, this.z)

    var segW = width/this.segments
    for(var i = 0; i < this.segments; i ++){

      fill(this.segColors[i])
      translate(.5*segW, 0, 0)
      if(i!=this.skip){box(segW, this.height, this.depth)}
      translate(.5*segW, 0, 0)

    }
    pop()
  }
}
