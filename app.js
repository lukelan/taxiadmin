
/**
 * Node.js Login Boilerplate
 * Author : Stephen Braitsch
 * More Info : http://bit.ly/LsODY8
 */

var exp = require('express');
var app = exp.createServer();
var mongo = require('mongodb');

app.root = __dirname;
global.host = 'localhost';

require('./app/config')(app, exp);
require('./app/server/router')(app);

//user = require('./app/server/modules/account-manager');
//app.get('/users', user.findAll);

app.listen(9000, function(){
	console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});