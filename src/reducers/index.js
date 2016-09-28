/**
 * Created by jonlazarini on 08/09/16.
 */
import { combineReducers } from 'redux';
import tweets from './tweets';
import tweetQuery from './tweetQuery';

const reducers = combineReducers({
  tweets,
  tweetQuery
})
export default reducers