//Simple web server

var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send('Hello World!');	
});
