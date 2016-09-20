/**
 * Created by jonlazarini on 08/09/16.
 */

import { FETCHED_TWEET } from '../const'

function gettingTweets( keyword='2' ) {
  return fetch(`http://reqres.in/api/users?page=${keyword}`)
}

export const getTweetsAsync = (keyword) => dispatch => {
  // dispatch(fetchingTweets())
  gettingTweets(keyword)
    .then(response => response.json())
    // data is an array
    .then(r => (r.data))
    .then(tweets => {
      dispatch(fetchedTweets(tweets))
      console.log('tweets: ', tweets)
    })
}

// r is the response from the api server AND list the data array returned
// from the response
function fetchedTweets(listTweets) {
  return {
    type: FETCHED_TWEET,
    listTweets
  };
}

// function fetchingTweets() {
//   return {
//       type: FETCHING_TWEET
//   };
// }