var http = require('http'),
express  = require('express'),
app      = express(),
server   = http.createServer(app);

/**
* MIDDLEWARE
********************* */
require('./configs/middleware')(app, express);

server.listen(8080);
console.log("\033[33mServer started on localhost:8080\033[39m\n");
