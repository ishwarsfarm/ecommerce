var express = require('express');

var app = express();

app.use(express.static(__dirname+'/public'));

var server = app.listen(3000,function(){
	var address = server.address().address;
	var port = server.address().port;

	console.log("Node server running on port:",port);
});