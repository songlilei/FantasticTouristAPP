/*
/!*
/!*
import React,{Component} from 'react';
import NavHeader from '../../components/NavHeader';
//效验是否登录，在redux中取数据
import {connect} from "react-redux" ;
//拿到所有action-types的数据
import  actions from "../../store/actions/session"
//把所有的actions绑成对象
// import {bindActionCreators} from "redux"






import "./index.less"
import {Link} from 'react-router-dom';
import Alert from "../../components/Alert/index";
 class Login extends Component{
   /!* constructor(){
        super()
        this.state = {login:false}  //默认未登录
    }*!/
     handleClick = ()=>{
         let username = this.username.value;
         let password = this.password.value;
         this.props.login({username,password});
     }
    render(){
        return (
            <div className="login-panel">
                <NavHeader title="登录" history={this.props.history}/>
                <div className="login-logo">
                    <img src={require('../../img/profile.png')} alt=""/>
                </div>
                <input ref={input=>this.username=input} type="text" placeholder="用户名"/>
                <input ref={input=>this.password=input} type="text" placeholder="密码"/>
                <Link to="/reg">前往注册</Link>
                <div
                    onClick={this.handleClick}
                    className="login-btn">登&nbsp;录</div>
                <Alert/>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions,
)(Login)*!/



import React, {Component} from 'react';
import NavHeader from '../../components/NavHeader';
import {Link} from 'react-router-dom';
import './index.less'
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
import Alert from "../../components/Alert/index";
  class Login extends Component {
    handleClick = ()=>{
        let username = this.username.value;
        let password = this.password.value;
        this.props.login({username,password});
    }
    render() {
        return (
            <div className="login-panel">
                <NavHeader title="登录"/>
                <div className="login-logo">
                    <img src={require('../../img/profile.png')} alt=""/>
                </div>
                <input ref={input=>this.username=input} type="text" placeholder="用户名"/>
                <input ref={input=>this.password=input} type="text" placeholder="密码"/>
                <Link to="/reg">前往注册</Link>
                <div
                    onClick={this.handleClick}
                    className="login-btn">登&nbsp;录</div>
                <Alert/>
            </div>
        )
    }
}
 connect(
    state=>state.session,
    actions
)(Login);*!/
import React, {Component} from 'react';
import NavHeader from '../../components/NavHeader';
import {Link} from 'react-router-dom';
import './index.less'
import {connect} from 'react-redux';
import actions from '../../store/actions/session';
import Alert from "../../components/Alert/index";
class Login extends Component {
    handleClick = ()=>{
        let username = this.username.value;
        let password = this.password.value;
         this.props.history.push("/profile");

        this.props.login({username,password});
    }
    render() {
        return (
            <div className="login-panel">
                <NavHeader title="登录"/>
                <div className="login-logo">
                    <img src={require('../../img/profile.png')} alt=""/>
                </div>
                <input ref={input=>this.username=input} type="text" placeholder="用户名"/>
                <input ref={input=>this.password=input} type="password" placeholder="密码"/>
                <Link to="/reg">前往注册</Link>
                <div
                    onClick={this.handleClick}
                    className="login-btn">登&nbsp;录</div>
                {/!*<Alert/>*!/}
            </div>
        )
    }
}
export default  connect(
    state=>state.session,
    actions
)(Login);*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import "./index.less"
import NavHeader from "../../components/NavHeader"
import {connect} from 'react-redux'
// import actions from '../../../store/actions/session'
import actions from "../../store/actions/session"
class Login extends Component {
    constructor() {
        super();
        this.state = {isShow1: false, isShow2: false}
    }

    signUp = (e) => {
        e.preventDefault();
        let phone = this.phone.value;
        console.log(phone);
        let password = this.password.value;
        if (phone && password) {
            alert("登录成功")
            this.props.history.push("/profile")
            this.props.login({phone, password});
            this.setState({isShow1: false});
            this.setState({isShow2: false});
        }
        else if (!phone && password) {
            this.setState({isShow1: true});
            this.setState({isShow2: false});
        }
        else if (phone && !password) {
            this.setState({isShow2: true});
            this.setState({isShow1: false});
        }
        else {
            this.setState({isShow1: true});
            this.setState({isShow2: true});
        }
        console.log("11111");

        // this.phone.value='';
        // this.password.value='';
    };
    disappear = () => {
        this.setState({isShow1: false, isShow2: false});

    };

    render() {
        //console.log(this.phone.value);
        return (
            <div className="base-login">

                <NavHeader title="登录"/>
                <div className="register-form">
                    <form>
                        <div className="phone">
                            <input autoFocus ref={input => this.phone = input}
                                   onFocus={this.disappear}
                                   type="text" placeholder="请输入11位手机号码"/>
                            {/*{this.phone ? this.phone.value === '' ?*/}
                            {/*<span className="checkout-phone">手机号不能为空</span> : '' : ''}*/}
                            {this.state.isShow1 ? <span
                                className="checkout-phone">手机号不能为空</span> : ''}

                        </div>
                        <div className="password">
                            <input ref={input => this.password = input}
                                   onFocus={this.disappear}
                                   type="password" placeholder="请输入密码"/>
                            {this.state.isShow2 ? <span className="checkout-password">密码不能为空</span> : ''}

                            <button
                                onClick={this.signUp}
                                className="btn">登录
                            </button>
                        </div>
                        <div className="goto">
                            <Link to={'/reg'}>前往注册</Link>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(
    state => state.session,
    actions
)(Login)