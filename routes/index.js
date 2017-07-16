var express = require('express');
var router = express.Router();
var request = require("request");
var bodyParser = require('body-parser');

var jsonParcer = bodyParser.json();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/top', jsonParcer, function(req, res, next){
  console.log('inside /test route');
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
    searchResults = json;

/*     topPopular.results.forEach(function(index){
      console.log("title " + index.title);
      console.log("title " + index.vote_count);
    }) */
    //console.log(topPopular.results);
  });
  res.render('index', { title: 'Movies' });
});


router.get('/search', jsonParcer, function(req, res, next){
  console.log('inside /search route');

  /* search */
    var options = { method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      qs: 
      { include_adult: 'false',
        page: '1',
        query: 'indiana jones',
        language: 'en-US',
        api_key: 'f3440b43f00ffcf48f98630447fa13d9' },
      body: '{}' };

    request(options, function (error, response, body) {
      if (error) throw new Error(error);
      
      json = JSON.parse(body);
      searchResults = json;
      //console.log(body);
    });
  res.render('index', { title: 'Movies' });
});


module.exports = router;
