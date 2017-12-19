import {get,post} from "./index";
//获取轮播图接口
export function getSliders() {
    return get("/api/sliders");
}