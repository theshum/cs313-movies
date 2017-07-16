var express = require('express');
var router = express.Router();
var request = require("request");
var bodyParser = require('body-parser');

var jsonParcer = bodyParser.json();

router.get('/top', function(req, res, next){
  console.log('inside /top route');
  var data;
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

    //console.log(body);
    var json = JSON.parse(body); 
    topPopular = json;

/*     topPopular.results.forEach(function(index){
      console.log("title " + index.title);
      console.log("title " + index.vote_count);
    }) */
    //console.log(topPopular.results);
  });
  res.render('test', { title: 'Movies' });
});

module.exports = router;
