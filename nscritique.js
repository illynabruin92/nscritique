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
