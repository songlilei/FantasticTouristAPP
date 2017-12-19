import * as types from '../action-types';
//首页的初始状态
let initState = {
  sliders: {
    loading: false,
    list: []
  }
}
export default function (state = initState, action) {
  switch (action.type) {
    case types.FETCH_SLIDERS:
      return {
        ...state,
        sliders: {
          loading: true,//轮播图加载状态改为加载中
          list: []//轮播图数据重置为空数组
        }
      }
    // action对象一般会有两个属性{type,payload}
    case types.FETCH_SLIDERS_SUCCESS:
      return {
        ...state,
        sliders: {
          loading: false,//轮播图加载状态改为加载完毕
          list: action.payload//轮播图数据等于取回来的数组
        }
      }
    default:
      return state;
  }
}