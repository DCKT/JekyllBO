import http from 'http';
import express from 'express';
import Router from './app/Router';

var app = express(),
server  = http.createServer(app);


var { Index } = Router;

/**
* MIDDLEWARE
********************* */
import middleware from './configs/middleware';
middleware(app, express);


app.use('/', Index);

server.listen(8080);
console.log("Server started on localhost:8080\n");
