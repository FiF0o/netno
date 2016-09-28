/**
 * Created by jonlazarini on 28/09/16.
 */
import SEARCH_TWEET from '../const'

const initialState = {}

const tweetQuery = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TWEET: {
      return {
        ...state,
        // value is passed down from the action creator
        id: action.id,
        text: action.text,
      }
    }
    default: {
      return state
    }
  }
}

export default tweetQuery