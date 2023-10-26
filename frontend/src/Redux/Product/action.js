import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType"


export const GetDataReq = () => {
    return {type:GET_DATA_REQUEST}
}

export const GetDataSuccess = (payload) => {
    return {type:GET_DATA_SUCCESS, payload}
}

export const GetDataError = () => {
    return {type:GET_DATA_FAILURE}
}
