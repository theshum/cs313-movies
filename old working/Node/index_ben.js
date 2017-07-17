var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var testjs = require('./public/test.js');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
	res.render('test');
});

app.post('/login', function(req, res) {
	if (req.body.username == 'admin' && req.body.password == 'password') {
		res.json({success:true});
	} else {
		res.json({success:false});
	}
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
