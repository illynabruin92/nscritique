var http = require('http');

var PORT=8081;

function handleRequest(request, response){
  if(request.url == "/cookies") {
    response.end("ME WANT COOKIE.... OM NOM NOM NOM");
  } else {
      response.end('Eureka! Path Hit: ' + request.url);
  }
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});

var PORT=8082;

function handleRequest(request, response){
  if(request.url == "/poodles") {
    response.end("Oodles of Poodles... Run!");
  } else {
      response.end('Get schwifty! Path Hit: ' + request.url);
  }
}

var server2 = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
