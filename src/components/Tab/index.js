import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './index.less';

export default class Tab extends Component {
    render() {
        return (
            <nav>
                <NavLink exact activeClassName="active" to="/">
                    <i className="iconfont icon-icon-site"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/inbound-tour" activeClassName="active">
                    <i className="iconfont icon-lvyou"></i>
                    <span>境内游</span>
                </NavLink>
                <NavLink to="/order" activeClassName="active">
                    <i className="iconfont icon-gouwuche"></i>
                    <span>订单</span>
                </NavLink>
                <NavLink to="/profile" activeClassName="active">
                    <i className="iconfont icon-gerenzhongxin"></i>
                    <span>个人中心</span>
                </NavLink>
            </nav>
        )
    }
}