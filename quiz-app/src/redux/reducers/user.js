import { ADD_USER } from '../actions/user'
import initialState from "../initialState";

const user = (state = initialState.users.usersList, {type, payload}) => {
    switch(type) {
        case ADD_USER:
            return [
                ...state,
                {
                    ...payload
                }
            ]
        default:
            return state
    }
}

export default user