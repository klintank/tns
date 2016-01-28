/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });
    
    res.end('Hello from Expression projectName is undefined on line 12, column 27 in Templates/javascript/HelloWorld.js..\n');
    
}).listen(8080, "");
