import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
let reducers = combineReducers({
  router:routerReducer
});
export default reducers;