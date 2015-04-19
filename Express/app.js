//Simple web server

var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.get('/', function(request, response) {
	response.send('Hello World!');	
});

app.listen(port, function () {
  console.log('Server listening at port %d', port);
});
