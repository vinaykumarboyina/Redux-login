import {registerReducer} from './RegisterReducer'
import { loginReducer } from './Reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
    registration:registerReducer,
    login:loginReducer
})