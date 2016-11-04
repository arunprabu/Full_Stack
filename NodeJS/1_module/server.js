//create a server and listen to requests
var http = require('http'); //code module of node -- try global.http in node console

var handleRequests = function(req, res){
    res.writeHead('200', {'Content-Type': 'text/plain'});
    res.end('Server is running \n');
}

var server = http.createServer(handleRequests);

server.listen('3009', 'localhost');
console.log("Server is running on port 3009");