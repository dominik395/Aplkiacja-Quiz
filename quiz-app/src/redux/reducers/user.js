import { ADD_USER } from '../actions/user'
import initialState from "../initialState";

const user = (state = initialState.users, {type, payload}) => {
    switch(type) {
        case ADD_USER:
            return {
                users: {
                    userLogin: {},
                    usersList: [...state.users.usersList, payload]
                }
            }
        default:
            return state
    }
}

export default user