/*
import * as types from "../action-types";
import {reg,login,logout} from "../../api/session";
import history from "../history"
import {push} from 'react-router-redux';
export default {
    reg(user){
        return function (dispatch,getState) {
            reg(user).then(result=>{
                let {code,success,error} = result;
                dispatch({
                    type:types.REG,
                    payload:{success,error}
                })
                if(code==0){
                    history.push("/login")
                }
            })
        }
    },
    login(user){
        return function(dispatch,getState){
            login(user).then(result=>{
                let{code,success,error,user} = result;
                dispatch({
                    type:types.LOGIN,
                    payload:{success,error,user}
                });
                if(code == 0){
                    dispatch(push('/profile'));
                }
            })
        }
    },
}*/
import * as types from '../action-types';
import {reg,login,logout,validate} from '../../api/session';
import {push} from 'react-router-redux';
import history from '../history';
let actions =  {
    reg(user){
        return function(dispatch,getState){
            reg(user).then(result=>{
                console.log(result);
                let {code,success,error} = result;
                dispatch({
                    type:types.REG,
                    payload:{success,error}
                });
                if(code == 0){//code=0表示成功 成功后跳到登录页
                    //dispatch(push('/login'));
                    history.push('/login');
                }
            })
        }
    },
    login(user){
        return function(dispatch,getState){
            login(user).then(result=>{
                let{code,success,error,user} = result;
                dispatch({
                    type:types.LOGIN,
                    payload:{success,error,user}
                });
                if(code == 0){
                    dispatch(push('/profile'));
                }
            })
        }
    },
    logout(){
        return function(dispatch,getState){
            logout().then(result=>{
                let {code,success,error} = result;
                dispatch({
                    type:types.LOGOUT,
                    payload:{success,error}
                });
                // dispatch(push('/login'));
            });
        }
    },
    clearMessages(){
        return {

            type:types.CLEAR_MESSAGES
        }
    },
    validate(){
        return function(dispatch,getState){
            validate().then(result=>{
                let {code,success,error,user}= result;
                dispatch({
                    type:types.VALIDATE,
                    payload:{success,error,user}
                });
            });
        }
    }
}
export default actions;