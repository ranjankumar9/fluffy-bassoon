
import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType";

const initialState = {
    datadetail: [],
    isLoading: false,
    isError: false
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_DATA_REQUEST:
            return { ...state, isLoading: true }
        case GET_DATA_SUCCESS:
            return { ...state, isLoading: false, datadetail: payload }
        case GET_DATA_FAILURE:
            return { ...state, isError: true }
        default:
            return state;
    }
}