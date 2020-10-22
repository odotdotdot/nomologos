class Path{
  constructor(){
    this.farClippingDistance = 10 * height * Math.tan(Math.PI/6)
    this.halfGroundPlaneWidth = .5*(width - constants.path.width)
  }

  render(){
    noStroke()
    //ground
      push()
      fill(colors.bass)
      translate(-.5*constants.path.width - .5*this.halfGroundPlaneWidth, 0, camera.eyeZ)
      rotateX(Math.PI/2)
      plane(this.halfGroundPlaneWidth, 2*this.farClippingDistance)
      pop()

      push()
      translate(0,0,camera.eyeZ)
      rotateX(Math.PI/2)
      fill("#D81E5B")
      plane(constants.path.width, 2*this.farClippingDistance)
      pop()

      push()
      fill(colors.bass)
      translate(.5*constants.path.width + .5*this.halfGroundPlaneWidth, 0, camera.eyeZ)
      rotateX(Math.PI/2)
      plane(this.halfGroundPlaneWidth, 2*this.farClippingDistance)
      pop()

  }



}
