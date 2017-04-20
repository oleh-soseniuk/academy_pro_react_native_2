var server = require('http').createServer();
var io = require('socket.io')(server);
io.on('connection', function(client){
  client.on('calculate', function(data){
      calculate(randomInteger(1, 50));
  });
  client.on('disconnect', function(){

  });
});

server.listen(2222);
console.log('Socket listen on port 2222');

function calculate(number) {
    io.emit('update', {
        number, 
        result: factorial(number)
    });
}

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}