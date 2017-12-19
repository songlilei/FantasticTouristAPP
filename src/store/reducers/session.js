/*
import * as types from "../action-types";
let initState= {
    error:"",
    success:"",
    user:null,
}

export default function (state=initState,action) {
    switch (action.type){
        case types.REG:
            return {
                ...action.payload
            };
        case types.LOGIN:
            return {
                ...action.payload
            };
        case types.LOGOUT:
            return {
                ...action.payload
            }
        default:
            return state
    }

}*/
import * as types from '../action-types';
//会话
let initState = {
    error: '',//错误消息
    success: '',//成功消息
    user:null,//如果登录成功的话，需要给此属性赋值为登录用户
}
export default function (state = initState, action) {
    switch (action.type) {
        case types.REG:///注册方法调用完成后
            //不需要解构老状态
            return {
                ...action.payload
            };
        case types.LOGIN:///注册方法调用完成后
            return {
                ...action.payload
            };
        case types.LOGOUT:///退出方法调用完成后
            return {
                ...action.payload
            };
        case types.CLEAR_MESSAGES:
            return {
                ...state,
                error: '',
                success:''
            };
        case types.VALIDATE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}