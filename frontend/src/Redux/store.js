import { reducer as AuthReducer } from "./Authentication/reducer";
import { reducer as ProductReducer } from './Product/reducer'
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    AuthReducer,
    ProductReducer
})


export const store = legacy_createStore(
    rootReducer,
    applyMiddleware(thunk)
)