import * as types from '../action-types';
import {getLessons} from "../../api/list"

let actions={
    getList(){
        return function (dispatch,getState) {
            let {listLesson:{
                hasMore,
                limit,
                offset,
                isLoading
            }}=getState().list;
            if(hasMore&&!isLoading){
                dispatch({type:types.GET_LIST});
                dispatch({type:types.LIST_SUCCESS,payload:getLessons(offset,limit)})
            }
        }
    },
    fetchDestinations(){
        return function(dispatch,getState){
            let {listLesson:{
                isLoading,
                offset,
                limit,
                hasMore
            }} = getState().list;
            if(hasMore && !isLoading){
                dispatch({type:types.GET_LIST});
                dispatch({type:types.LIST_SUCCESS,payload:getLessons(offset,limit)});
            }
        }
    },
    refreshDestinations(){//下拉刷新
        return function(dispatch,getState){
            let {
                listLesson:{
                    isLoading,offset,limit,hasMore
                }
            } = getState().list;
            if(!isLoading){
                dispatch({type:types.REFRESH_DESTINATIONS});
                dispatch({type:types.REFRESH_DESTINATIONS_SUCCESS,payload:getLessons(0,offset)});
            }
        }
    }
};
export default actions;
