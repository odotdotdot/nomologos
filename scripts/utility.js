const utility = {
  getByte : (i,m) => {return (m & (0x00ff<<i*8))>>>i*8;}
, hexToList : (e,j=4) => {var r = [];for(var i = 0; i < j; i ++){r.push(e&0xf);e>>>=4}return r;}
, byteToList : (e,j=4) => {var r = [];for(var i = 0; i < j; i ++){r.push(e&0xff);e>>>=8}return r;}
, setTextSize: (font, message, max, parameter) => {
              let s = max;
              textFont(font);
              textSize(s);
              while( textWidth(message) > parameter - 5){
                s-=.5;
                textSize(s);
              }
              return s;
            }
  , getRandomInt: (max)=> {
      return Math.floor(Math.random() * Math.floor(max));
    }

  , cubicBezier: (matrix, t)=> {
      var position = [0,0]
      position[0] += matrix[0][0] * Math.pow( 1-t, 3 );
      position[0] += matrix[1][0] * 3 * Math.pow( 1-t, 2 ) * t;
      position[0] += matrix[2][0] * 3 * ( 1-t) * Math.pow(t, 2);
      position[0] += matrix[3][0] * Math.pow(t, 3);

      position[1] += matrix[0][1] * Math.pow( 1-t, 3 );
      position[1] += matrix[1][1] * 3 * Math.pow( 1-t, 2 ) * t;
      position[1] += matrix[2][1] * 3 * ( 1-t) * Math.pow(t, 2);
      position[1] += matrix[3][1] * Math.pow(t, 3);

      return position
  }

}
