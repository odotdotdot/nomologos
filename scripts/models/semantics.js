class Semantics{
  constructor(vector){
    this.position = vector
    this.axisMag = 50
    this.coneHeight = 10
    this.coneRadius = 3
    this.labelMag = this.axisMag + this.coneHeight
  }
  render(){
    this.axes('HUMAN')
    //this.labels()
    this.exampleLabels()
  }

  labels(){
    push()
    translate(this.position.x, this.position.y, this.position.z)
    textAlign(LEFT, CENTER)
    this.label(this.labelMag,0, 0, 'SYNONYMS')
    textAlign(CENTER, BOTTOM)
    this.label(0, -this.labelMag, 0, 'HYPERNYMS')
    textAlign(RIGHT, CENTER)
    this.label(-this.labelMag,0, 0, 'ANTONYMS' )
    textAlign(CENTER, TOP)
    this.label(0, this.labelMag, 0, 'HYPONYMS')
    textAlign(LEFT, CENTER)
    rotateY(Math.PI/2)
    this.label(this.labelMag, 0, 0, 'ADJACENT CONCEPTS')


    pop()
  }

  exampleLabels(){
    push()
    translate(this.position.x, this.position.y, this.position.z + 1)
    textAlign(CENTER, CENTER)
    this.label(0, -2, 0, 'HUMAN')
    textAlign(LEFT, CENTER)
    this.label(this.labelMag,0, 0, 'PERSON')
    textAlign(CENTER, BOTTOM)
    this.label(0, -this.labelMag, 0, 'LIFEFORM')
    textAlign(RIGHT, CENTER)
    this.label(-this.labelMag,0, 0, 'BEAST' )
    textAlign(CENTER, TOP)
    this.label(0, this.labelMag, 0, 'WOMAN')
    textAlign(LEFT, CENTER)

    var ac = ['RIGHTS', 'MORALITY', 'BEING', 'ANTHROPOLOGY', 'CLAY', 'TRAFFICKING', 'ANATOMY']
    for(var i = 0; i < ac.length; i ++){
      rotateY( Math.PI/12 )
      this.label(this.labelMag, 0, 0, ac[i])
    }

    pop()
  }
  axes(seed = ''){
    textFont(fonts.timer)
    var tw = textWidth(seed)
    push()
    translate(this.position.x, this.position.y, this.position.z)
    //x axis
      this.axis(-this.axisMag, 0, 0, -.5*tw-2, 0, 0)
      this.axis(.5*tw+2, 0, 0, this.axisMag, 0, 0)
      this.arrow(this.axisMag, 0, 0, 'right')
      this.arrow(-this.axisMag, 0, 0, 'left')
    //y axis
      this.axis(0, -this.axisMag, 0, 0, -5, 0)
      this.axis(0, 5, 0, 0, this.axisMag, 0)
      this.arrow(0, this.axisMag, 0, 'down')
      this.arrow(0, -this.axisMag, 0, 'up')
    //z axis
      //this.axis(0, 0, 0, 0, 0, -this.axisMag)
      //this.arrow(0, 0, -this.axisMag, 'out')
    pop()
  }
  axis(xs, ys, zs, xe, ye, ze, arrowDirection){
    stroke(colors.yellow)
    beginShape()
      vertex(xs,ys,zs)
      vertex(xe,ye,ze)
    endShape(CLOSE)

  }
  arrow(x, y, z, direction){
        push()
          noStroke()
          translate(x, y, z)
          switch(direction){
            case 'right':
              rotateX(Math.PI/2)
              rotateZ(-Math.PI/2)
              break;
            case 'left':
              rotateX(Math.PI/2)
              rotateZ(Math.PI/2)
              break;
            case 'up':
              rotateX(Math.PI)
              break;
            case 'down':
              break;
            case 'out':
              rotateX(Math.PI/2)
              rotateZ(Math.PI)
              break;
          }
          cone(this.coneRadius, this.coneHeight)
        pop()
  }
  label(x,y,z,message){
    push()
      fill(colors.white)
      translate(x,y, z)
      textFont(fonts.timer)
      text(message, 0, 0)
    pop()
  }
}
