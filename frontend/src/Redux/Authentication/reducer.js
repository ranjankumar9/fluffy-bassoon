import { POST_DATA_FAIL, POST_DATA_REQUEST, POST_DATA_SUCCESS } from "./actionType";

const initialState = {
    data:[],
    isAuth:false,
    isLoading:false,
    isError:false
}

export const reducer = (state = initialState, {type,payload}) => {
    switch(type){
        case POST_DATA_REQUEST:
            return {...state, isLoading:true}
        case POST_DATA_SUCCESS:
            return {...state, isLoading:false, isAuth:true, token:payload}
        case POST_DATA_FAIL:
            return {...state, isError:true,isLoading:false}
        default:
            return state;
    }
}