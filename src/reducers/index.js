/**
 * Created by jonlazarini on 08/09/16.
 */
import { combineReducers } from 'redux';
import tweets from './tweets';

const reducers = combineReducers({
  tweets,
})
export default reducers