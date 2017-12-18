import {get,post} from './index';
//注册
export function reg(user){
  return post('/api/reg',user);//{username,password}
}
//登录
export function login(user){
  return post('/api/login',user);//{username,password}
}
//退出
export function logout(){
  return get('/api/logout');
}

export function validate(){
  return get('/api/validate');
}