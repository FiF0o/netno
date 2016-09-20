/**
 * Created by jonlazarini on 08/09/16.
 */
import { ADD_TWEET } from '../const';

const initialState = {}

const tweetReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TWEET : {
      return {
        ...state,
        // value is passed down from the action creator
        id: action.id,
      }
    }
    default: {
      return state
    }
  }
}

export default tweetReducer
