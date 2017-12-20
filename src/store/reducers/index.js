import {combineReducers} from 'redux';
<<<<<<< HEAD
import session from "./session"
import {routerReducer} from 'react-router-redux';
let reducers = combineReducers({
  router:routerReducer,
    session,
=======
import home from './home';
import {routerReducer} from 'react-router-redux';
let reducers = combineReducers({
  home,
  router:routerReducer
>>>>>>> de0c9ba413ab55a9f586f70cd6507bac2d648159
});
export default reducers;