import React, {Component} from 'react';
import './style/comm.less';
import Profile from "../src/containers/Profile/index";
import Login from "../src/containers/Login/index";
import Reg from "../src/containers/Reg/index";
import {Route,HashRouter as Router} from 'react-router-dom';
//import history from './store/history';
//ConnectedRouter这个组件实现redux仓库和本组件连接
import createHashHistory from "history/createHashHistory";
let history=createHashHistory();
import {ConnectedRouter} from 'react-router-redux';

import Home from "./containers/Home/index";
import Cart from "./containers/Cart/index";
import Traffic from "./containers/traffic/index";

//The prop `history` is marked as required in `Router`
//如果是HashRouter hash
//BrowserRouter html5 pushState
//Router本身需要外界传入history
export default class App extends Component {
  render() {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/traffic" component={Traffic}/>
                <Route path="/order" component={Cart}/>
                <Route  path="/login" component={Login}/>
                <Route  path="/reg" component={Reg}/>
                <Route  path="/profile" component={Profile}/>
            </div>
        </ConnectedRouter>
    )
  }
}