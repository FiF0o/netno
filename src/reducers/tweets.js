/**
 * Created by jonlazarini on 08/09/16.
 */
// import { ADD_TWEET } from '../const';
import { FETCHED_TWEET } from '../const';

const initialState = []

const tweets = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_TWEET : {
      // listTweets comes from the first action creator fetchedTweets
      // storing the list of tweets (listTweets).
      return action.listTweets
    }
    default: {
      return state
    }
  }
}

export default tweets
