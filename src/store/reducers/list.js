import * as types from '../action-types';
let initState={
    listLesson:{
        hasMore:true,
        list:[],
        limit:5,
        offset:0,
        isLoading:false
    }
};
export default function (state=initState,action) {
    switch (action.type) {
        case types.GET_LIST:
            return {
                ...state,
                listLesson: {
                    ...state.listLesson,
                    isLoading: true
                }
            };
        case types.LIST_SUCCESS:
            console.log(state.listLesson.offset + action.payload.list.length)
            return {
                ...state,
                listLesson: {
                    ...state.listLesson,
                    isLoading: false,

                    list: [...state.listLesson.list, ...action.payload.list],
                    offset:state.listLesson.offset + action.payload.list.length,
                    hasMore: action.payload.hasMore
                }
            };
        case types.REFRESH_DESTINATIONS:
            return {
                ...state,
                listLesson:{
                    ...state.listLesson,
                    isLoading:true,
                    list:[]
                }
            };
        case types.REFRESH_DESTINATIONS_SUCCESS:
            return {
                ...state,
                listLesson:{
                    ...state.listLesson,
                    isLoading:false,
                    list:[...action.payload.list],
                    offset:action.payload.list.length,
                    hasMore:action.payload.hasMore
                }
            };
        default:
            return state
    }
}