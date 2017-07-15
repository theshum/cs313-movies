var express = require('express');
var router = express.Router();
var request = require("request");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/test', function(req, res, next){
  console.log('inside /test route');
  var options = { method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    qs: 
    { page: '1',
      include_video: 'false',
      include_adult: 'false',
      sort_by: 'popularity.desc',
      language: 'en-US',
      api_key: 'f3440b43f00ffcf48f98630447fa13d9' },
    body: '{}' };

  request(options, function (error, res, body) {
    if (error) throw new Error(error);

    console.log(body);
  });
  res.render('index', { title: 'Express' });
}) 


module.exports = router;