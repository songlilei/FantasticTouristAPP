import {combineReducers} from 'redux';
import home from './home';
import {routerReducer} from 'react-router-redux';
import list from "./list"
let reducers = combineReducers({

  home,
  list,
  router:routerReducer

});
export default reducers;