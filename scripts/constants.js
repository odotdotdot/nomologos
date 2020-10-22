const constants = {
  signifier: {
    seeds : [
       ['impartial', 0, 0, 0]
      ,['bias', -1, 0, -1]
      ,['objective', -1, 0, -1]
      ,['truth', 0, -1, -1]
      ,['light', 0, .5, -1]
      ,['darkness', -1, 0, -1]
      ,['sight', 0, 0, -1]
      ,['psychic', 0, 0, -1]
      ,['corporeal', -1, 0, -1]
      /*
      ,['judgment', 0, -1, 0]
      ,['fair', 1, 0, 0]
      ,['preferential', -1, 0, 0]
      ,['rash', -1, 0, 0]
      ,['wisdom',0, 1, -1]
      ,['malice',-1, 0,-1]
      ,['unbiased', 1, 0, 0]
      ,['unbiassed', 1, 0, 0]
      ,['cold-eyed', 1, 0, 0]
      ,['indifferent', 1, 0, 0]
      ,['just', 1, 0, 0]
      ,['dispassionate', 1, 0, 0]
      ,['fair', 1, 0, 0]
      ,['disinterested', 1, 0, 0]
      ,['partial', -1, 0, 0]
      ,['unfair', -1, 0, 0]
      ,['interested', -1, 0, 0]
      ,['important', -1, 0, 0]
      ,['extraordinary', -1, 0, 0]*/
    ]
    ,spacer:60
  }

   ,puzzle:{
     width:30
   }
  ,clock:{
     radius: 20
    ,rotationIncrement:Math.PI/200
    ,depth:4
  }
  ,coin:{
     xOffset : 100
    ,yOffset : 100
    ,radius : 20
    ,tubeRadius:3
    ,rotationIncrement:Math.PI/100
  }

  ,time:{
    totalTimeMs:90000
  }

  ,camera:{
     tilt: .075 * Math.PI
    ,speed: -2
  }

  ,path:{
     width:200
  }

  ,spheres:{
    number: 45
  }
  ,wall:{
    depth:{
      min:20
      ,max:50
    }
    ,height:{
      min:100
      ,max:400
    }
  }

  ,obstacles : {
      number: 50
     ,size : {
         min :20
        ,max :100
      }
     ,position : {
        range: {
            x : {
               min : 0
              ,max : 0
            }
           ,y : {
               min : -100
              ,max : 0
            }
          ,z : {
              min: 0
             ,max: 20
           }
       }
    }
  }

  ,hurdles : {
     number : 10
    ,height : {
       min: 50
      ,max: 50
    }
    ,width : {
       min: 30
      ,max: 90
      }
    ,stock : {
       w: 5
      ,d: 5
      ,r: 5
    }
  }


}
