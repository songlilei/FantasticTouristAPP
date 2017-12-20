import React, {Component} from 'react';
import './style/comm.less'
import {Route} from 'react-router-dom';
import Home from "../src/containers/Home/index"
import Profile from "../src/containers/Profile/index";
import Login from "../src/containers/Login/index";
import Reg from "../src/containers/Reg/index";
import history from './store/history';
import createHashHistory from "history/createHashHistory";
//let history = createHashHistory();
//ConnectedRouter这个组件实现redux仓库和本组件连接
import {ConnectedRouter} from 'react-router-redux';


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
            <Route  path="/login" component={Login}/>
            <Route  path="/reg" component={Reg}/>
            <Route  path="/profile" component={Profile}/>
           



        </div>
      </ConnectedRouter>
    )
  }
}