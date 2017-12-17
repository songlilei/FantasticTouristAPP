const HOST = 'http://localhost:3000';
export function get(url){
  return fetch(HOST+url,{
    method:'GET',
    credentials:"include",
    headers:{
      "Accept":"application/json",
    }
  }).then(res=>res.json())
}
//url后台地址 data 请求体
export function post(url,data) {
  return fetch(HOST+url,{
    method:'POST',//请求方法
    credentials:"include",
    headers:{//请求头
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify(data)
  }).then(res=>res.json())
}