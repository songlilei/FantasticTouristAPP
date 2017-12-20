import {get,post} from "./index";
//获取轮播图接口
export function getSliders() {
    return get("/api/sliders");
}
//获取首页目的地列表
export function getDestinations(offset,limit) {
    return get(`/api/list?offset=${offset}&limit=${limit}`);
}