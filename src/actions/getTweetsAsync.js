import { FETCHED_TWEET } from '../const'

// https://davidwalsh.name/fetch
// https://dev.twitter.com/oauth/application-only
// https://dev.twitter.com/oauth/overview/authorizing-requests
// http://stackoverflow.com/questions/30203044/using-an-authorization-header-with-fetch-in-react-native

const fetchedTweets = (tweets) => ({
  type: FETCHED_TWEET,
  tweets,
})

export const getTweetsAsync = (query) => {
  const encQuery = encodeURIComponent(`${query}`)
  return (dispatch) => fetch(`http://localhost:2000/search?q=${encQuery}`)
      .then(data => data.json())
      .then(data => dispatch(fetchedTweets(data.statuses)))
}


/**
 *
 * const gettingTweets = (q = query) => {
   // promisefy the codebird call otherwise getTweetsAsync is returned as
   // undefined
   return new Promise((resolve, reject) => {
     const cb = new Codebird
     cb.setConsumerKey(key, secret);
     cb.__call("search_tweets", q, (reply, rate, err,) => {
       console.log(reply)
       console.log(rate)
       resolve(reply);
     }, true);
  })
 }
 *
 *
*/
