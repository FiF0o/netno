/**
 * Created by jonlazarini on 08/09/16.
 */
import { FETCHED_TWEET } from '../const'

/*
// fetch REST API methods and headers examples
// https://davidwalsh.name/fetch
//
// fetch Auth header example
// http://stackoverflow.com/questions/30203044/using-an-authorization-header-with-fetch-in-react-native
//
*/

/*
* Auth header signature example:
* https://dev.twitter.com/oauth/tools/signature-generator/12724333?nid=730
*
* Example fetch auth token:
* http://stackoverflow.com/questions/30203044/using-an-authorization-header-with-fetch-in-react-native
* */

/**
 * Authorization: OAuth oauth_consumer_key="qrVsXyVBHIRPwHvxBkXjDTZfz",
 *  oauth_nonce="edb4c70d068f4dbd4604e385e0ee0350",
 *  oauth_signature="VZEuUJlE1XARo%2F7pNPMqbn4v8bo%3D",
 *  oauth_signature_method="HMAC-SHA1", oauth_timestamp="1474552392",
 *  oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT",
 *  oauth_version="1.0"
 */


// https://davidwalsh.name/fetch

// find Stack Overflow - example
// http://stackoverflow.com/questions/30203044/using-an-authorization-header-with-fetch-in-react-native

import { key, secret } from '../../keys'
// console.log('key:, ', key)

const query = {q:'ta mere', count:'20'}

// const obj = {
//   method: 'post',
//   mode: 'no-cors',
//   dataType: 'json',
//   headers: {
//     'Authorization': `OAuth oauth_consumer_key="${key}",oauth_nonce="edb4c70d068f4dbd4604e385e0ee0350",oauth_signature="VZEuUJlE1XARo%2F7pNPMqbn4v8bo%3D",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1474552392",oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT",oauth_version="1.0"`,
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   body: 'q=camarche&count=1',
//   'Content-Type': 'application/x-www-form-urlencoded'
// }

// console.log('obj:, ', obj)
//
// const tata = () => {
//   return fetch('http://localhost:2000/search?q=kikou&count=1')
// };
//
// tata();

const toto = (twitterQ = query) => {
  console.log('twitterQ: ', twitterQ)
  return fetch('http://localhost:2000/search', twitterQ)
}
toto(query);

const Codebird = require('codebird')

const gettingTweets = (q = query) => {
  // promisefy the codebird call otherwise getTweetsAsync is returned as
  // undefined
  return new Promise((resolve, reject) => {
    const cb = new Codebird;
    cb.setConsumerKey(key, secret);
    cb.__call("search_tweets", q, (reply, rate, err,) => {
      console.log(reply)
      console.log(rate)
      resolve(reply);
    }, true);
  })
}

export const getTweetsAsync = (q = query) => dispatch => {
  // dispatch(fetchingTweets())
  gettingTweets(q)
  // returns response from server (tweets), Twatter API
    .then(tweets => {
      // getting the statuses array of the codebird promise and removed
      // .tojson() method as codebird is already handling it
      dispatch(fetchedTweets(tweets.statuses))
    })
}

// r is the response from the api server AND list the data array returned
// from the response
function fetchedTweets(listTweets) {
  return {
    type: FETCHED_TWEET,
    // tweets passed down when action is dispatched
    listTweets
  };
}

// function fetchingTweets() {
//   return {
//       type: FETCHING_TWEET
//   };
// }