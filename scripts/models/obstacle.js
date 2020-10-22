class Obstacle{

  //for n samples over the function generate a vector according to the code below
  constructor(vector){
    this.size = Math.random() * (constants.obstacles.size.max - constants.obstacles.size.min) + constants.obstacles.size.min
    this.position = createVector(vector.x + Math.random() * (constants.obstacles.position.range.x.max - constants.obstacles.position.range.x.min) + constants.obstacles.position.range.x.min
                                ,vector.y + Math.random() * (constants.obstacles.position.range.y.max - constants.obstacles.position.range.y.min) + constants.obstacles.position.range.y.min
                                ,vector.z + Math.random() * (constants.obstacles.position.range.z.max - constants.obstacles.position.range.z.min) + constants.obstacles.position.range.z.min)
    this.color = obstacleColors[Object.keys(obstacleColors)[Math.floor(Math.random()*Object.keys(obstacleColors).length)]]
    this.hasRing = false;
  }
}
