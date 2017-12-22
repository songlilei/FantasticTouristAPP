import {combineReducers} from 'redux';
import session from "./session"

import home from './home';
import {routerReducer} from 'react-router-redux';
import list from "./list"
let reducers = combineReducers({

    home,
    session,
    list,
    router: routerReducer





});
export default reducers;