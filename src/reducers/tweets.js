import { FETCHED_TWEET } from '../const';

const initialState = {
  tweetList: [],
  hasLoaded: false
}

const tweets = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_TWEET : {
      return {
        tweetList: action.tweetList,
        hasLoaded: !action.hasLoaded
      }
    }
    default: {
      return state
    }
  }
}

export default tweets
