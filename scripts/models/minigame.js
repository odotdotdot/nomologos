class MiniGame{
  constructor(vector){
    this.position = vector;
    this.width = 400
    this.height = 250
    this.margin = 20
    this.guesses = []
    this.poles = [['people', .1, .8], ['', .7, .25]]
    this.axisLabels = [ ['(POWER)', .5, -.035, 0], ['(SENSE)', -.53, .55, -Math.PI/2]]
    this.guesses = [ ['jury', .5, .5], ['liberty', .2, .7], ['army', .9, .15], ['press', .2, .4]]
    this.tS = 14

  }
  render(){
    push()
    translate(this.position.x, this.position.y, this.position.z)
    rotateY(Math.PI/2)
    push()
    fill(colors.bass)
    plane(this.width, this.height)

    //case label
      push()
      fill(colors.tenor)
      translate(.5*this.width, -.5*this.height + this.margin, 1)
      textFont(fonts.timer)
      textAlign(LEFT, CENTER)
      var t = 'DUNCAN v. LOUISIANA (1968)'
      text(t, -textWidth(t), 0)
      pop()

    //axes
      stroke(colors.tenor)
      strokeWeight(2)
      rectMode(CENTER)
      //rect(0, 0, this.width, this.height)
      translate(-.5*this.width + this.margin, -.5*this.height, 1)
      line(0, 0, 0, this.height - this.margin)
      line(0, this.height - this.margin, this.width - this.margin, this.height - this.margin)

    //poles
      pop()//back to center of puzzle
      translate(-.5*this.width + this.margin, .5*this.height - this.margin, 1)//to 0, 0 of graph
      textFont(fonts.timer)
      textAlign(LEFT, CENTER)
      this.poles.forEach( e => {
        fill(colors.tenor)
        textSize(utility.setTextSize(fonts.timer, 'people', 16, .1*this.width))
        circle(e[1]*(this.width - this.margin) - 3, -e[2]*(this.height - this.margin)+3, 3)
        text(e[0], e[1]*(this.width - this.margin), -e[2]*(this.height - this.margin))
      });

    //guesses
      this.guesses.forEach( e => {
        fill(colors.alto)
        textSize(utility.setTextSize(fonts.timer, 'people', 16, .1*this.width))
        circle(e[1]*(this.width - this.margin) - 3, -e[2]*(this.height - this.margin)+3, 3)
        text(e[0], e[1]*(this.width - this.margin), -e[2]*(this.height - this.margin))
      });


    //axes labels
      this.axisLabels.forEach( e=> {
        fill(colors.tenor)
        textAlign(CENTER, CENTER)
        textSize(utility.setTextSize(fonts.timer, e[0], 24, .15*this.width))
        translate(e[1]*(this.width - this.margin), e[2]*(-this.height + this.margin), 0)
        rotate(e[3])
        text(e[0], 0, 0)
      });


    pop()
  }
}
