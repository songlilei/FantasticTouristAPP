import {get, post} from './index';
//获取轮播图
export function getSliders() {
  return get('/api/sliders');
}
//旅游列表
export function getLessons(offset,limit) {
  return get(`/api/list?offset=${offset}&limit=${limit}`);
}