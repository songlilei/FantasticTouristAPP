import {combineReducers} from 'redux';
import session from "./session"

import home from './home';
import {routerReducer} from 'react-router-redux';
let reducers = combineReducers({
    home,
    session,
    router: routerReducer
});
export default reducers;