import * as types from '../action-types';
let initState={
    type:"",
    lesson:{
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
                lesson: {
                    ...state.lesson,
                    loading: true
                }
            };
        case types.LIST_SUCCESS:
            return {
                ...state,
                lesson: {
                    ...state.lesson,
                    loading: false,
                    list: [...state.lesson.list, ...action.payload.list],
                    offset: state.lesson.offset + action.payload.list.length,
                    hasMore: action.payload.hasMore
                }
            }
    }
}