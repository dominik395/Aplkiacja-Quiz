import { ADD_USER, LOGIN_USER, LOGOUT_USER } from '../actions/user'
import initialState from "../initialState";

const user = (state = initialState.users, {type, payload}) => {
    switch(type) {
        case ADD_USER:
            return {
                users: {
                    userLogin: { ...state.users.userLogin },
                    usersList: [...state.users.usersList, payload]
                }
            }
        case LOGIN_USER:
            return {
                users: {
                    userLogin: { ...payload },
                    usersList: state.users.usersList.filter(user => user.nick !== payload.nick)
                }
            }
        case LOGOUT_USER:
            return {
                users: {
                    userLogin: {},
                    usersList: [ ...state.users.usersList, payload ]
                }
            }
        default:
            return state
    }
}

export default user