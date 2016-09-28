import { FETCHED_TWEET } from '../const'

//https://dev.twitter.com/oauth/application-only

const fetchedTweets = (tweets) => ({
  type: FETCHED_TWEET,
  tweets,
})

export const getTweetsAsync = (query) => (
  (dispatch) => fetch(`http://localhost:2000/search?q=${query}`)
      .then(data => data.json())
      .then(data => dispatch(fetchedTweets(data.statuses)))
)


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
