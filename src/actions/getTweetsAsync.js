import { FETCHED_TWEET } from '../const'

const fetchedTweets = (tweets) => ({
  type: FETCHED_TWEET,
  tweets,
})

export const getTweetsAsync = (query) => (
  (dispatch) => fetch(`http://localhost:2000/search?q=${query}`)
      .then(data => dispatch(fetchedTweets(data.statuses)))
)
