var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

//template engine
app.set('view engine','ejs');

//Call the controllers
todoController(app);

//static files
app.use(express.static('.'));

//listen to a port
app.listen(8000);
console.log('Port 8000 is active');
