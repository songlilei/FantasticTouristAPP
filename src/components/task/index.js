import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';

export default class Task extends Component {
    render() {
        return (
            <div className="foot">
                <NavLink exact activeClassName="active" to="/">
                    <i className="glyphicon glyphicon-tasks"></i>
                    <span>全部订单</span>
                </NavLink>
                <NavLink to="/inbound-tour" activeClassName="active">
                    <i className="glyphicon glyphicon-yen"></i>
                    <span>待付款</span>
                </NavLink>
                <NavLink to="/order" activeClassName="active">
                    <i className="glyphicon glyphicon-repeat"></i>
                    <span>处理中</span>
                </NavLink>
                <NavLink to="/profile" activeClassName="active">
                    <i className="glyphicon glyphicon-check"></i>
                    <span>已成功</span>
                </NavLink>
            </div>
        )
    }
}