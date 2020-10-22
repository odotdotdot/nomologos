class Signifier{
  constructor(word, base, vector){
    this.word = word
    this.location = p5.Vector.add(base, vector)
  }
  render(){
    push()
    translate(this.location.x, this.location.y, this.location.z)
    fill(colors.white)
    sphere(.1 * sigUnitSize)
    rotateX( Math.tan(
        (Math.abs(camera.eyeY)/ Math.abs(camera.eyeZ-camera.centerZ))) )
    textFont(fonts.timer)
    textAlign(LEFT, CENTER)
    textSize(sigTextSize)
    text(this.word,.1 * sigUnitSize + 5 , 0)
    pop()
  }
}
