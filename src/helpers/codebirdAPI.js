/**
 * Created by jonlazarini on 22/09/16.
 */
// requires codebird API for twatter API OAuth
const Codebird = require('codebird')
import { key, secret } from '../../keys'

/*
 Token management
 https://apps.twitter.com/
 */

/*
 Twatter API GET request
 https://dev.twitter.com/rest/public/search
 url: https://api.twitter.com/1.1/search/tweets.json?q=
 */

// Twatter API GET request
const defaultQuery = { q: "o2", count: 10 };

const codebirdAPI = (args = defaultQuery) => {
  const cb = new Codebird;
// instantiate codebird to access twatter API

  cb.setConsumerKey(key, secret);

  return cb.__call(// Pick twitter API endpoint
    "search_tweets", args, (reply) => {
      // console.log(reply);
    }, // this parameter required by codebird
    true);
  // return 'zgeg';
}

export default codebirdAPI