import { createStore, combineReducers } from 'redux'
import user from "./reducers/user";
import initialState from './initialState';

// const root = combineReducers({
//     user,
// })

const store = createStore(user, initialState)

export default store
