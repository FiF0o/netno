/**
 * Created by jonlazarini on 08/09/16.
 */
import { combineReducers } from 'redux';
import { tweetReducer } from './tweetReducer';
console.log('tweet reducer', tweetReducer);

const reducers = combineReducers({
  tweetReducer,
})
export default reducers