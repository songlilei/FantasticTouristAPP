import {combineReducers} from 'redux';
import session from "./session"

import home from './home';
import {routerReducer} from 'react-router-redux';
import list from "./list"
let reducers = combineReducers({
<<<<<<< HEAD
    home,
    session,
    router: routerReducer
=======
  home,
  list,
  router:routerReducer

>>>>>>> 7974caaf4d941856a6f9aed3e1e4b3155404e193
});
export default reducers;