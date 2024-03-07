import { createStore, combineReducers } from 'redux'
import user from "./reducers/user";
import game from './reducers/game';
import initialState from './initialState';

const root = combineReducers({
    user,
    game,
})

const store = createStore(root, initialState)

export default store
