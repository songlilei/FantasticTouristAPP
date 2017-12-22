import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Link} from "react-router-dom";
import './index.less';

export default class List extends Component {
    render() {
        return (
            <div className="listfy">
                <div className="list-lb">
                    <i className="glyphicon glyphicon-star"></i>

                    <span>我的收藏</span>
                    <i className="glyphicon glyphicon-chevron-right"></i>
                </div>
                <div>
                    <i className="glyphicon glyphicon-folder-open"></i>
                    <span>我的抵用券</span>
                    <i className="glyphicon glyphicon-chevron-right"></i>
                </div>
                <div >
                    <i className="glyphicon glyphicon-bed"></i>
                    <span>我的行程</span>
                    <i className="glyphicon glyphicon-chevron-right"></i>

                </div>
                <div className="footer">

                        <Link  to="/">首页&nbsp;&nbsp;&nbsp;&nbsp;|</Link>
                        <span>我的&nbsp;&nbsp;&nbsp;&nbsp;|</span>
                        <span>HAO旅游下载&nbsp;&nbsp;&nbsp;&nbsp;|</span>
                        <span>帮助</span>


                    <p className="footer">©2017 Hao旅游 京ICP证070791号</p>

                </div>




            </div>
        )
    }
}