import * as types from '../action-types';
import {getLessons} from "../../api/list"

let actions={
    getList(){
        return function (dispatch,getState) {
            let {type,list:{
                hasMore,
                limit,
                offset,
                isLoading
            }}=getState().list;
            if(hasMore&&!isLoading){
                dispatch({type:types.GET_LIST});
                dispatch({type:types.LIST_SUCCESS,payload:getLessons(type,offset,limit)})
            }
        }
    }
};
export default actions;
