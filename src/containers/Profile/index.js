import React, {Component} from 'react';
import './index.less'
import Header from '../../components/Header';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Task from "../../components/task/index";
import List from "../../components/List/index"
import actions from '../../store/actions/session';
class Profile extends Component {
    handleLogout = ()=>{
        this.props.logout();
    }
    render() {
        return (
            <div className="profile">
                <Header title="个人中心"/>
                <div className="profile-bg">
                    <img src={require('../../images/header.jpg')}/>
                    <div>
                        {
                            this.props.user ? <p>{this.props.user.username}</p> : <Link to="/login">登录</Link>
                        }
                    </div>
                    {
                        this.props.user&&<div onClick={this.handleLogout}>退出</div>
                    }
                </div>

                <Task></Task>
               <List></List>
            </div>
        )
    }
}
export default connect(
    state => state.session,
    actions
)(Profile);