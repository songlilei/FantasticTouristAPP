import React,{Component} from 'react';
import NavHeader from '../../components/NavHeader';
import "./index.less";
import {connect} from "react-redux";
import actions from "../../store/actions/session"
import {Link} from 'react-router-dom';
import Alert from "../../components/Alert/index";
  class Reg extends Component{
      constructor(props){
          super(props)
          this.state = {
              username:"",
              userPassword:"",


          }
      }
     handleClick=()=>{
         let username = this.username.value;
         let password = this.password.value;
         let toPassword = this.toPassword.value;
         console.log(this.props);

         this.props.reg({username,password,toPassword});

        this.setState ({
            username,
            userPassword:password,

        })

     }

    render(){
        return (
            <div className="login-panel">
                <NavHeader title="注册"/>
                <div className="login-logo">
                    <img src={require('../../img/profile.png')} alt=""/>
                </div>
                <input ref={input=>this.username=input} type="text" placeholder="用户名" />



                <input  type="text" placeholder="手机号" />
                <input  type="text" placeholder="邮箱" />




                <input ref={input=>this.password=input} type="text" placeholder="密码"/>
                <input ref={input=>this.toPassword=input} type="text" placeholder=" 确认密码"/>
                <Link to="/login">前往登录</Link>
                <div
                    onClick={this.handleClick}
                    className="login-btn">注&nbsp;册</div>
                <Alert/>
            </div>
        )
    }
}
export default connect(
    state=>state.session,
    actions
)(Reg)
