var http = require("http");
var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.writeHead('200', {'Content-Type': 'text/html'});
    res.end(`<li>
                    <a href='#'>Express JS</a>
                    
                </li>`);
})

app.get("/about", function(req, res){
    var fName = req.param('firstname');
    var eMail = req.param('email');

    res.send(`The params are ${fName} and ${eMail}`);
    
})

http.createServer(app).listen(3000);
console.log("started server at port 3000 ")