import { createStore, combineReducers } from 'redux'
import user from "./reducers/user";

const root = combineReducers({
    user,
})

const store = createStore(root)

export default store
