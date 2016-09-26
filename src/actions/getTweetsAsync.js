/**
 * Created by jonlazarini on 08/09/16.
 */
import { FETCHED_TWEET } from '../const'

/*
// fetch REST API methods and headers examples
// https://davidwalsh.name/fetch
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



// import { key } from '../../keys'

// const headersQuery = {
//   'Authorization': 'OAuth '+btoa('oauth_consumer_key=qrVsXyVBHIRPwHvxBkXjDTZfz')
//   +btoa('')
//     oauth_nonce="edb4c70d068f4dbd4604e385e0ee0350",
//   oauth_signature="VZEuUJlE1XARo%2F7pNPMqbn4v8bo%3D",
//   oauth_signature_method="HMAC-SHA1", oauth_timestamp="1474552392",
//   oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT",
//   oauth_version="1.0"
// }
// 'Content-Type': 'application/x-www-form-urlencoded'

//  curl --get 'https://api.twitter.com/1.1/statuses/mentions_timeline.json' --data 'amp%3Bsince_id=14927799&count=2' --header 'Authorization: OAuth oauth_consumer_key="qrVsXyVBHIRPwHvxBkXjDTZfz", oauth_nonce="5c56ea8dc275c8d6a9499d7e5a1473da", oauth_signature="K%2Bu7kheUaVQvN%2BEOokD0D%2FFOsws%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp="1474574542", oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT", oauth_version="1.0"' --verbose

const query = {q:'ta mere', count:'20'}

// const obj = {
//   method: 'GET',
//   mode:'no-cors',
//   dataType: 'json',
//   headers: {
//     'Authorization': `OAuth oauth_consumer_key="${key}",oauth_nonce="edb4c70d068f4dbd4604e385e0ee0350",oauth_signature="VZEuUJlE1XARo%2F7pNPMqbn4v8bo%3D",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1474552392",oauth_token="159806486-2uHUKgCF0hO1LiqJVDV7mLFfs14QDPTY7pcuhKTT",oauth_version="1.0"`,
//     'Content-Type': 'application/x-www-form-urlencoded'
//   },
//   body: query
// }
//
// const gettingTweets = ( q = obj ) => {
//   console.log('q: ', q)
//   return fetch(`https://api.twitter.com/1.1/search/tweets.json`, q )
//   // return fetch(`https://api.twitter.com/1.1/statuses/mentions_timeline.json`, q )
//
// }
// import codebirdAPI from '../helpers/codebirdAPI'
// console.log(codebirdAPI)

const Codebird = require('codebird')
import { key, secret } from '../../keys'

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