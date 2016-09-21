var http = require('http');

var PORT=8081;
var PORT2=8090;

function handleRequestNicely(request, response){
    response.end("Baby, you're a firework!");
}

function handleRequestMean(request, response){
  response.end("Go dig your grave, you sack.");
}

var serverone = http.createServer(handleRequestNicely);

var server2 = http.createServer(handleRequestMean);

serverone.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});

server2.listen(PORT2, function(){
  console.log("Server listening on: http://localhost:%s", PORT2);
});
