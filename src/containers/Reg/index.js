// import React, {Component} from 'react';
// import NavHeader from '../../components/NavHeader';
// import {Toast} from 'antd-mobile';
// import ReactDOM from 'react-dom';
// import "./index.less";
// import {connect} from "react-redux";
// import actions from "../../store/actions/session"
// import {Link} from 'react-router-dom';
// import Alert from "../../components/Alert/index";
// class Reg extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             username: "",
//             userPassword: "",
//             reg1: "",
//         }
//     }
//
//     writeMsg = (message) => {
//         const element = (
//             <textarea rows="1" value={message} disabled></textarea>
//         );
//         ReactDOM.render(
//             element,
//             document.getElementById('errorMsg')
//         );
//     }
//
//     msg = () => {
//         let username = this.username.value.trim();
//         let password = this.password.value;
//
//        /* if (!username) {
//             let reg2 = "用户名不能为空";
//             console.log(reg2);
//             this.writeMsg(reg2);
//             // Toast.info('手机号不能为空', 1);
//             // console.log(Toast.info('手机号不能为空', 1));
//
//             this.setState({reg1: reg2});
//             return;
//         }
//         else if (!password) {
//             let reg2 = "密码不能为空";
//             console.log(reg2);
//             this.writeMsg(reg2);
//             // Toast.info('手机号不能为空', 1);
//             // console.log(Toast.info('手机号不能为空', 1));
//
//             this.setState({reg1: reg2});
//             return;
//         }
//         this.writeMsg("注册成功");*/
//         this.props.reg({username, password});
//
//     }
//
//     componentDidMount() {
//         this.props.validate();
//     }
//
//     render() {
//         return (
//             <div className="reg-panel">
//                 <NavHeader title="注册"/>
//                 <div className="reg-logo">
//                     <img src={require('../../images/header.jpg')} alt=""/>
//                 </div>
//                 <input ref={input => this.username = input} type="text" placeholder="用户名"/>
//                 <input type="text" placeholder="手机号"/>
//                 <input type="text" placeholder="邮箱"/>
//                 <input ref={input => this.password = input}
//                        type="password" placeholder="密码"/>
//                 <input ref={input => this.toPassword = input}
//                        type="password" placeholder=" 确认密码"/>
//                 {/*<Link to="/login">前往登录</Link>*/}
//                 <div className="text-div" id="errorMsg">
//
//                 </div>
//                 <div
//                     onClick={this.msg}
//                     className="reg-btn">注&nbsp;册
//                 </div>
//                 <Alert/>
//             </div>
//         )
//     }
// }
// export default connect(
//     state => state.session,
//     actions
// )(Reg)


import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import "./index.less";
import {connect} from 'react-redux';
import NavHeader from '../../components/NavHeader';
// import actions from '../../../store/actions/session'
import actions from "../../store/actions/session"
class Register extends Component {
    constructor() {
        super();
        this.state = {isShow1: false, isShow2: false, isShow3: false}
    }

    registers = (e) => {
        e.preventDefault();
        console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk');
        let phone = this.phone.value;
        let password = this.password.value;
        let confirmPassword = this.confirmPassword.value;

        if (!!phone && !!password && !!confirmPassword && password === confirmPassword) {
            console.log(phone);
            alert("注册成功")
            this.props.history.push("/login")
            this.props.reg({phone, password});
        }
        else if (!phone && password && confirmPassword) {
            this.setState({isShow1: true});
            this.setState({isShow2: false});
            this.setState({isShow3: false});
        }
        else if (!phone && !password && confirmPassword) {
            this.setState({isShow1: true});
            this.setState({isShow2: true});
            this.setState({isShow3: false});
        }
        else if (phone && !password && confirmPassword) {
            this.setState({isShow2: true});
            this.setState({isShow1: false});
            this.setState({isShow3: false});
        }
        else if (phone && !password && !confirmPassword) {
            this.setState({isShow2: true});
            this.setState({isShow1: false});
            this.setState({isShow3: true});
        }
        else {
            this.setState({isShow1: true});
            this.setState({isShow2: true});
            this.setState({isShow3: true});
        }
        // this.phone.value='';
        // this.password.value='';
        // this.confirmPassword.value='';
    };
    disappear = () => {
        this.setState({isShow1: false, isShow2: false, isShow3: false});

    };

    render() {
        // console.log(this.props);

        return (
            <div className="base">
                <NavHeader title="注册"/>



                <div className="register-form">
                    <form>
                        <div className="phone">
                            <input
                                autoFocus
                                ref={input => this.phone = input}
                                onFocus={this.disappear}
                                type="text" placeholder="请输入11位手机号码"/>
                            {this.state.isShow1 ? <span
                                className="checkout-phone">手机号不能为空</span> : ''}
                        </div>
                        <div className="password">
                            <input ref={input => this.password = input}
                                   onFocus={this.disappear}
                                   type="password" placeholder="请设置密码"/>
                            {this.state.isShow2 ? <span className="checkout-password">密码不能为空</span> : ''}
                        </div>
                        <div className="confirm-password">
                            <input ref={input => this.confirmPassword = input}
                                   onFocus={this.disappear}
                                   type="password" placeholder="请确认密码"/>
                            {this.state.isShow3 ? <span className="checkout-password2">密码不能为空</span> : ''}
                            <button
                                onClick={this.registers}
                                className="btn">注册
                            </button>
                        </div>
                        <div className="goto">
                            <Link to={'/login'}>已有账号？去登录</Link>
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
)(Register)