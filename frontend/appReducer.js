import { combineReducers } from 'redux'
import { createStore } from 'redux'

import {userReducer} from './userSlice';

const appReducer = combineReducers({
    user: userReducer 
})

export default appReducer;
