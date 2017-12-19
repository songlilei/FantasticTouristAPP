import * as types from '../action-types';
//首页的初始状态
let initState = {
    sliders: {
        loading: false,
        list: []
    },
    destinations: {
        loading: false,//是否加载中
        list: [],//课程列表
        offset: 0,//偏移量你从第几条开始取
        limit: 5,//最多取几条
        hasMore: true//是否有更多，当它为true时候，才可以继续加载
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
      case types.FETCH_DESTINATIONS:
          return {
              ...state,
              destinations: {
                  ...state.destinations,
                  loading: true
              }
          }
      case types.FETCH_DESTINATIONS_SUCCESS:
          //{type:payload:{list,hasMore}}
          return {
              ...state,
              destinations:{
                  ...state.destinations,
                  loading: false,
                  list:[...state.destinations.list,...action.payload.list],//老课程列表+返回的课程列表=新课程列表
                  offset:state.destinations.offset+action.payload.list.length,//老的偏移量+返回的条数=新的偏移量
                  hasMore:action.payload.hasMore//是否有更多
              }
          }
      case types.REFRESH_DESTINATIONS:
          return {
              ...state,
              destinations:{
                  ...state.destinations,
                  loading:true,
                  list:[]
              }
          }
      case types.REFRESH_DESTINATIONS_SUCCESS:
          return {
              ...state,
              destinations:{
                  ...state.destinations,
                  loading:false,
                  list:[...action.payload.list],
                  offset:action.payload.list.length,
                  hasMore:action.payload.hasMore
              }
          }
    default:
      return state;
  }
}