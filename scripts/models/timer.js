class Timer{
  constructor(){
    this.timeMs = constants.time.totalTimeMs
    this.lastMillis = 0
    this.seeds = ['criminal', 'public', 'nature', ,'witness', 'speedy', 'impartial']
    this.seedIndex = utility.getRandomInt(this.seeds.length)
    this.points = 0
  }

  update(){
    var interval = millis()-this.lastMillis
    this.timeMs-=interval
    this.lastMillis = millis()
  }

  render(){
    push()
    noStroke()
    fill(colors.tenor)
    textFont(fonts.timer)
    textSize(50)
    textAlign(CENTER,CENTER)
    translate(camera.centerX, camera.centerY, camera.centerZ)
    text(this.msToString(), .2*width, indicator)
    //text(this.points, -.25*width, indicator)
    text(this.seeds[this.seedIndex], 0, indicator)
    pop()
    this.update()
  }

  msToString(){
    var minutes = Math.floor(this.timeMs/60000)
    var seconds = Math.floor(this.timeMs/1000) - minutes*60
    if(seconds < 10)
      seconds = '0' + seconds
    return minutes + ':' + seconds
  }
  reset(){
    if(this.timeMs < 0){
     camera.setPosition(cameraStart[0], cameraStart[1], cameraStart[2])
     timer.timeMs = constants.time.totalTimeMs
   }
   if(frameCount % 300 == 0)
    this.seedIndex = utility.getRandomInt(this.seeds.length)

  if(frameCount % 10 == 0)
    this.points +=1
  }
}
