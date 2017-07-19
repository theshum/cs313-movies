var express = require('express');
var router = express.Router();
var request = require("request");
var bodyParser = require('body-parser');
var url = require('url');
var Chart = require('chart.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CS416 - Adam Shumway' });
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
    //console.log('runSearch callback complete');
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
      } else {
        data = [];
        labels = [];
          searchResults.results.forEach(function(item){
            data.push(item.vote_count);
            labels.push(item.title);
            //console.log("data " + data);
            //console.log("labels " + labels);
          }); 
        
        chartData = {
                      type: 'horizontalBar',
                      data: {
                          labels: labels,
                          datasets: [{
                              label: '# of Votes',
                              data: data,
                              backgroundColor: [
                                  'rgba(255, 99, 132, 0.2)',
                                  'rgba(54, 162, 235, 0.2)',
                                  'rgba(255, 206, 86, 0.2)',
                                  'rgba(75, 192, 192, 0.2)',
                                  'rgba(153, 102, 255, 0.2)',
                                  'rgba(255, 159, 64, 0.2)'
                              ],
                              borderColor: [
                                  'rgba(255,99,132,1)',
                                  'rgba(54, 162, 235, 1)',
                                  'rgba(255, 206, 86, 1)',
                                  'rgba(75, 192, 192, 1)',
                                  'rgba(153, 102, 255, 1)',
                                  'rgba(255, 159, 64, 1)'
                              ],
                              borderWidth: 1
                          }]
                      },
                      options: {
                          scales: {
                              yAxes: [{
                                  ticks: {
                                      beginAtZero: true
                                  }
                              }]
                          }
                      }
                  }
      }
      //console.log("index.js chartData: " + chartData);
      //console.log(body);
      //console.log('search request complete');
      //console.log('searchResults: ' + JSON.stringify(searchResults));
      callback(res);
    });
};
    

module.exports = router;
