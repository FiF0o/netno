/**
 * Created by jonlazarini on 23/09/16.
 */


/**
 * kill server in use
 * ps aux | grep node *
 * kill -9 PID
 */

// http://jlongster.com/Backend-Apps-with-Webpack--Part-I
// `node api/server.js`

var express = require('express');
var request = require('request'); //https://github.com/request/request#http-authentication
var url = require('url');

const app = express();
// var bodyParser = require('body-parser');

const port = process.env.PORT || 2000;



var util = require('util');
var exec = require('child_process').exec;

var command = `curl --get 'https://api.twitter.com/1.1/search/tweets.json' --data 'count=4&q=%23yoyo' --header 'Authorization: OAuth oauth_consumer_key="Fk3WUKRXNNYtGbSCTHVbCpQzy", oauth_nonce="0605f25953378ef0013628604802aef4", oauth_signature="BP1CsK7CEdrfyt8uO38%2Fg3I9R%2Bw%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1474909561", oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT", oauth_version="1.0"' --verbose`

child = exec(command, function(error, stdout, stderr){

  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);

  if(error !== null)
  {
    console.log('exec error: ' + error);
  }

});

// var da = new Date().getTime()
// console.log('da unix timestamp', da)


// var yo = {
//   url: 'https://api.twitter.com/1.1/search/tweets.json',
//   headers: {
//     'Authorization': `OAuth oauth_consumer_key="Fk3WUKRXNNYtGbSCTHVbCpQzy",oauth_nonce="edb4c70d068f4dbd4604e385e0ee0350",oauth_signature="VZEuUJlE1XARo%2F7pNPMqbn4v8bo%3D",oauth_signature_method="HMAC-SHA1",oauth_timestamp="${da}",oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT",oauth_version="1.0"`,
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   query: {
//     count: 10,
//     q: "yoyo"
//   }
// }
// console.log('yo ', yo)
//
// app.get('/', function(req, res){
//   // res.send('ta mere')
//   request(yo).pipe(res)
// })


// const router = express.Router();

//TODO Add router so that req.params can be used to get params properties

// //replace route with client route - server side to match client side
// app.get('/test2/:keyword', (req, res) => {
//   // grab keyword { q: 'query' } from the get request from the route - object
//   // comes from
//   // Twatter API
//   // var keyword = req.params.q
//   // options = {
//   //   protocol:'http:',
//   //   // getting Twatter API
//   //   host: 'api.twitter.com',
//   //   // selecting 'search/tweets.json' API end point
//   //   pathname: '1.1/search/tweets.json',
//   //   headers: {
//   //     'Authorization': 'OAuth' +
//   //     ' oauth_consumer_key="qrVsXyVBHIRPwHvxBkXjDTZfz",oauth_nonce="edb4c70d068f4dbd4604e385e0ee0350",oauth_signature="VZEuUJlE1XARo%2F7pNPMqbn4v8bo%3D",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1474552392",oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT",oauth_version="1.0"',
//   //     'Content-Type': 'application/x-www-form-urlencoded'
//   //   },
//   //   // header request body passing down q from Twatter API
//   //   query: {
//   //     q: "toto",
//   //     count: 10
//   //
//   //   }
//   // }
//   var kword = req.params.keyword
//   console.log(kword)
//   var options = {
//     url: 'https://api.twitter.com/1.1/search/tweets.json',
//     headers: {
//       'Authorization': 'OAuth' +
//       ' oauth_consumer_key="Fk3WUKRXNNYtGbSCTHVbCpQzy",oauth_nonce="edb4c70d068f4dbd4604e385e0ee0350",oauth_signature="VZEuUJlE1XARo%2F7pNPMqbn4v8bo%3D",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1474552392",oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT",oauth_version="1.0"',
//       'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     query: {
//       q: "toto",
//       count: 10
//     }
//   }
//   // var twitterUrl = url.format(options)
//   // var twitterUrl = 'https://api.twitter.com%2F1.1%2Fstatuses%2Fmentions_timeline.json&amp%253Bsince_id%3D14927799%26count%3D2%26oauth_consumer_key%3DqrVsXyVBHIRPwHvxBkXjDTZfz%26oauth_nonce%3Dd395a9597eb2eaf1102e8d1a827423e0%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1474891823%26oauth_token%3D159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT%26oauth_version%3D1.0';
//
//   // initiate request
//   request(options)
//   // sends response back to our server from the Twatter API
//     .pipe(res)
//
//   // request(twitterUrl).pipe(res)
//   // res.send('hello world');
//
// })


// const query = {q:'ta mere', count:'20'}

// import { key } from '../keys'

// const obj = {
//   method: 'GET',
//   mode:'no-cors',
//   dataType: 'json',
//   headers: {
//     'Authorization': 'OAuth' +
//     ' oauth_consumer_key="qrVsXyVBHIRPwHvxBkXjDTZfz",oauth_nonce="edb4c70d068f4dbd4604e385e0ee0350",oauth_signature="VZEuUJlE1XARo%2F7pNPMqbn4v8bo%3D",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1474552392",oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT",oauth_version="1.0"',
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   body: query
// }

// function gettingTweets(q) {
//   var q = q | obj;
//   // return fetch(`https://api.twitter.com/1.1/search/tweets.json`, q );
//   return 'toto'
//   // return fetch(`https://api.twitter.com/1.1/statuses/mentions_timeline.json`, q )
// }

app.get('/test', (req, res) => {
  //sends json obj to /test endpoint on GET req
  // res.json(gettingTweets());
  var tams = {
    url: 'https://api.twitter.com/1.1/search/tweets.json',
    headers: {
      'Authorization': 'OAuth' +
      ' oauth_consumer_key="Fk3WUKRXNNYtGbSCTHVbCpQzy",oauth_nonce="edb4c70d068f4dbd4604e385e0ee0350",oauth_signature="VZEuUJlE1XARo%2F7pNPMqbn4v8bo%3D",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1474552392",oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT",oauth_version="1.0"',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // twatter API doc: https://dev.twitter.com/oauth/tools/signature-generator/12724333?nid=781
    query: {
      count: 10,
      q: 'toto'
    }
    /**
     * *
     * signature base string
     * GET&https%3A%2F%2Fapi.twitter.com%2F1.1%2Fsearch%2Ftweets.json&count%3D4%26oauth_consumer_key%3DFk3WUKRXNNYtGbSCTHVbCpQzy%26oauth_nonce%3D0605f25953378ef0013628604802aef4%26oauth_signature_method%3DHMAC-SHA1%26oauth_timestamp%3D1474909561%26oauth_token%3D159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT%26oauth_version%3D1.0%26q%3D%2523yoyo
     *
     * Authorization header
     * Authorization: OAuth oauth_consumer_key="Fk3WUKRXNNYtGbSCTHVbCpQzy", oauth_nonce="0605f25953378ef0013628604802aef4", oauth_signature="BP1CsK7CEdrfyt8uO38%2Fg3I9R%2Bw%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1474909561", oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT", oauth_version="1.0"
     *
     * cURL command
     * curl --get 'https://api.twitter.com/1.1/search/tweets.json' --data 'count=4&q=%23yoyo' --header 'Authorization: OAuth oauth_consumer_key="Fk3WUKRXNNYtGbSCTHVbCpQzy", oauth_nonce="0605f25953378ef0013628604802aef4", oauth_signature="BP1CsK7CEdrfyt8uO38%2Fg3I9R%2Bw%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1474909561", oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT", oauth_version="1.0"' --verbose
     *
     */
  };
  // function cb(error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     var info = JSON.parse(body);
  //     console.log(info + " body");
  //     console.log(response + " Forks");
  //   }
  // }
  request(tams)
    .pipe(res)
})

// router.get('/', function(req, res) {
//   res.json({ message: 'hooray! welcome to our api!' });
// });


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router);


// =============================================================================
app.listen(port, () => {
  console.log('Magic happens on port ' + port);
});
