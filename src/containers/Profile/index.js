import React, {Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
class Profile extends Component {
    handleLogout = ()=>{
        this.props.logout();
    }
    render() {
        return (
            <div className="profile">
                <div className="profile-bg">
                    <img src={require('../../img/profile.png')}/>
                    <div>
                        {
                            this.props.user ? <p>{this.props.user.username}</p> : <Link to="/login">登录</Link>
                        }
                    </div>
                    {
                        this.props.user&&<div onClick={this.handleLogout}>退出</div>
                    }
                </div>
            </div>
        )
    }
}
export default connect(
    state => state.session,
    actions
)(Profile);