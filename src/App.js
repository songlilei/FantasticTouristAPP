import React, {Component} from 'react';
import './style/comm.less'
import {Route} from 'react-router-dom';
import history from './store/history';
//ConnectedRouter这个组件实现redux仓库和本组件连接
import {ConnectedRouter} from 'react-router-redux';

import Home from "./containers/Home/index";
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
        </div>
      </ConnectedRouter>
    )
  }
}