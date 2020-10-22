//mock up of game for second round of proposals
let path, camera, timer, obstacles = [], coins = [], clocks = [], hearts = [], sigs = [];
let moveCamera = true;
let cameraStart = [0, -150, 1000]
let indicator = -200
let sigTextSize = 16
let sigUnitSize = 100

function preload(){
  fonts = {
    timer: loadFont('./fonts/SourceCodePro-Medium.ttf')
  }
}

function setup(){
  var canvas = createCanvas(1200, 600, WEBGL)
  canvas.parent('canvasPosition')
  //debugMode(GRID, width, 24)
  camera = createCamera()
  camera.perspective(Math.PI/3.0, width/height)
  camera.setPosition(cameraStart[0], cameraStart[1], cameraStart[2])
  camera.tilt(constants.camera.tilt)
  path = new Path()
  timer = new Timer()

  //generate spheres
    for(var i = 0; i < constants.spheres.number; i ++){
      obstacles.push( new Sphere( sphere_seed_vector(i) ) )
    }

  //generate hurdles
    generateHurdles(-500, .4 * width, Math.PI/2 - Math.PI/12, 11/12*Math.PI, 5)
    var firstCurve = [
       [-.25*width, 1200]
      ,[-800, 2000]
      ,[800, 2500]
      ,[400, 3200]
    ]
    var firstTList = [0, .1, .18, .33, .45, .51, .6, .7, .75, .8, .9, 1]
    generateBezierHurdles(firstCurve, firstTList)
    var secondCurve = [
       [-.25*width, 5200]
      ,[-800, 8000]
      ,[800, 8500]
      ,[400, 8000]
    ]
    var secondTList = [0, .1, .18, .33, .45, .6, .7, .8, 1]
    generateBezierHurdles(secondCurve, secondTList)

  //generate walls
    for(var i = 2; i < 8; i ++)
      obstacles.push(new Wall(i*-1000))

  //generate coins between the wall recesses
  for(var i = 2; i < obstacles.length; i ++){
    if(obstacles[i].type == 'wall')
      coins.push(new Coin(obstacles[i].position, 'above'))

  //generate coins above some hurdles
    if(obstacles[i].type == 'hurdle'){
      var rollTheDice = Math.random()
       if(rollTheDice >= .4){
        coins.push(new Coin(
          createVector(obstacles[i].position.x
                    ,obstacles[i].position.y - obstacles[i].height
                    ,obstacles[i].position.z), 'above'))
        obstacles[i].hasRing = true;
       }
       if(rollTheDice <= .1){
          clocks.push(new Clock(createVector(obstacles[i].position.x
                    ,obstacles[i].position.y - obstacles[i].height - 100
                    ,obstacles[i].position.z)))
      obstacles[i].hasRing = true;
      }
    }

    }
    var hurdles = obstacles.filter(e=>e.type == 'hurdle' && e.hasRing == false)
    var luckyHurdleIndex = utility.getRandomInt(hurdles.length)
    puzzle =  new Puzzle (createVector(
       hurdles[luckyHurdleIndex].position.x
      ,hurdles[luckyHurdleIndex].position.y - hurdles[luckyHurdleIndex].height - 100
      ,hurdles[luckyHurdleIndex].position.z));


    for(var i = 0; i < 5; i ++)
      hearts.push(new Heart(createVector(-.3*width + i*50, indicator)))

    semantics = new Semantics (createVector(0,-10,200))

    sigs.push( new Signifier ('impartial', semantics.position, createVector(0,0,0)))

    for(var i = 1; i < constants.signifier.seeds.length; i ++)
      sigs.push( new Signifier (
        //the word
          constants.signifier.seeds[i][0]
        //base vector
         ,sigs[i-1].location
        //new position
         ,createVector(
            constants.signifier.seeds[i][1] * sigUnitSize
           ,constants.signifier.seeds[i][2] * sigUnitSize
           ,constants.signifier.seeds[i][3] * sigUnitSize)))

   minigame = new MiniGame(createVector(-.5*width - 100, -200, -1000))
}

function draw(){
  orbitControl()
  //ambientLight(200,200,200)

  background(colors.alto)
  fill(255)
  sphere(50)
  path.render()
  obstacles.forEach( e=> {e.render()})
  coins.forEach(e => { e.render()});
  clocks.forEach(e => { e.render()});
  hearts.forEach(e => { e.render()});
  puzzle.render();
  //semantics.render()
  sigs.forEach(e => { e.render()});
  minigame.render()


  timer.render()

  //update phase
    if(moveCamera)
      camera.move(0, constants.camera.speed* Math.sin(constants.camera.tilt), constants.camera.speed* Math.cos(constants.camera.tilt))
    timer.reset()
}

function sigsinit(){
  sigs = []

  sigs.push( new Signifier ('impartial', semantics.position, createVector(0,0,0)))

  for(var i = 1; i < constants.signifier.seeds.length; i ++)
    sigs.push( new Signifier (
      //the word
        constants.signifier.seeds[i][0]
      //base vector
       ,sigs[i-1].location
      //new position
       ,createVector(
          constants.signifier.seeds[i][1] * sigUnitSize
         ,constants.signifier.seeds[i][2] * sigUnitSize
         ,constants.signifier.seeds[i][3] * sigUnitSize)))
}

function keyPressed(){
  if(keyCode == ENTER)
    saveCanvas('screenCap', 'png')
  if(keyCode == TAB){
    moveCamera = !moveCamera
    console.log(camera)
  }
  if(keyCode == UP_ARROW){
    sigTextSize ++;
    sigsinit()}
  if(keyCode == DOWN_ARROW){
    sigTextSize--;
    sigsinit()}
  if(keyCode == RIGHT_ARROW){
    sigUnitSize ++;
    sigsinit()
  }
  if(keyCode == LEFT_ARROW){
    sigUnitSize--;
    sigsinit()
  }
}

function sphere_seed_vector(x){
  return createVector(2*constants.path.width*Math.sin(Math.random()*Math.PI*2)
                     , 0
                     , x / constants.spheres.number * 60 * constants.time.totalTimeMs/1000*constants.camera.speed)
}

function generateHurdles(centerZ, radius, startRadian, endRadian, number){
  push()
  minH = 0
  for(var i = 0; i < number; i ++){
    var x = radius*Math.cos( (startRadian-endRadian)*i/number + startRadian)
    var y = 0
    var z = centerZ + radius*Math.sin( (startRadian - endRadian)*i/number + startRadian)
    var n = new Hurdle( createVector(x,y,z), minH)
    obstacles.push(n)
    minH = n.height
  }
  pop()
}

function generateBezierHurdles(matrix, t_list){
  var lastHeight = 0
  for(var i = 0; i < t_list.length; i ++){
    var curvePoint = utility.cubicBezier(matrix, t_list[i])
    var h = new Hurdle(createVector(curvePoint[0], 0, -1*curvePoint[1]), lastHeight)
    obstacles.push(h)
    lastHeight = h.height
  }
}
