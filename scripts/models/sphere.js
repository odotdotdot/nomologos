class Sphere extends Obstacle{
  constructor(vector){
    super(vector);
    this.position.y = 0
    this.type = 'sphere'
  }
  render(){
    push()
    translate(this.position.x, this.position.y, this.position.z)
    fill(this.color)
    sphere(this.size)
    pop()
  }

}
