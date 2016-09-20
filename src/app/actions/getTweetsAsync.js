/**
 * Created by jonlazarini on 08/09/16.
 */
function gettingTweets( keyword='2' ) {
  return fetch(`http://reqres.in/api/users?page=${keyword}`)
}

export const getTweetsAsync = (keyword) => dispatch => {
  dispatch(fetchingPeople())
  gettingTweets(keyword)
    .then(response => response.json())
    // data is an array
    .then(r => (r.data))
    .then(tweets => {
      dispatch(fetchedPeople(tweets))
      console.log('tweets: ', tweets)
    })
}

// r is the response from the api server AND list the data array returned
// from the response
function fetchedTweets(list) {
  return {
      type: 'FETCHED_TWEETS',
    list
  };
}

function fetchingTweets() {
  return {
      type: 'FETCHING_TWEETS'
  };
}