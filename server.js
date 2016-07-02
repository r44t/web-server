var express = require('express');
var app = express();
var PORT = process.env.PORT | 3000;
var middleware = require('./middleware')


app.use(middleware.logger);
app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('About Us Page Here!');
})
// 
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('EXpress Server Started! on PORT ' + PORT);
});