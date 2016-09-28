import { FETCHED_TWEET } from '../const';

const initialState = []

const tweets = (state = initialState, action) => {
  switch (action.type) {
    case FETCHED_TWEET : {
      return action.tweets
    }
    default: {
      return state
    }
  }
}

export default tweets
