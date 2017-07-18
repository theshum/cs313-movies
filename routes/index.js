var express = require('express');
var router = express.Router();
var request = require("request");
var bodyParser = require('body-parser');
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/top', function(req, res, next){
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

    searchRequest(options, res, runSearch)
  });


router.get('/search', function(req, res, next){
  console.log('inside /search route');

  var requestURL = url.parse(req.url, true);
  var searchTerm = String(requestURL.query.search);

  //console.log('searchTerm: ' + searchTerm);

  /* search */
    var options = { method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      qs: 
      { include_adult: 'false',
        page: '1',
        query: searchTerm,
        language: 'en-US',
        api_key: 'f3440b43f00ffcf48f98630447fa13d9' },
      body: '{}' };

    searchRequest(options, res, runSearch)
    //console.log('return to get function');

});

function runSearch(res) {
    console.log('runSearch callback complete');
    res.render('top', { title: 'Movies' });
}

function searchRequest(options, res, callback) {
  request(options, function (error, response, body) {
      if (error) throw new Error(error);
      //console.log('body contents ' + JSON.stringify(body));
      json = JSON.parse(body);
      searchResults = json;
      
      if(searchResults.errors == 'query must be provided') {
        //console.log('our error was "captured"');
        searchResults = "empty";
        //console.log(JSON.stringify(searchResults));
      }

      //console.log(body);
      //console.log('search request complete');
      //console.log('searchResults: ' + JSON.stringify(searchResults));
      callback(res);
    });
};
    

module.exports = router;
