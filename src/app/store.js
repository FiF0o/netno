/**
 * Created by jonlazarini on 08/09/16.
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import reducers from './reducers';

export default createStore(
  reducers,
  applyMiddleware(thunk)
)