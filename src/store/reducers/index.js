import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import list from "./list"
let reducers = combineReducers({
    list,
    router:routerReducer
});
export default reducers;