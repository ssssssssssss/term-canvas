
/**
 * Module dependencies.
 */

var Canvas = require('../')
  , tty = require('tty')
  , size = tty.getWindowSize();

process.on('SIGINT', function(){
  ctx.reset();
  process.nextTick(function(){
    process.exit();
  });
});

process.on('SIGWINCH', function(){
  size = tty.getWindowSize();
  canvas.width = size[1];
  canvas.height = size[0];
});

var canvas = new Canvas(size[1], size[0])
  , ctx = canvas.getContext('2d');

ctx.hideCursor();
setInterval(function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'yellow';
  ctx.beginPath();
  ctx.lineTo(5, 5);
  ctx.lineTo(15, 10);
  ctx.lineTo(40, 5);
  ctx.lineTo(5, 5);
  ctx.stroke();
}, 1000 / 20);
