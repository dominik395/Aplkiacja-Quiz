import { ADD_USER, LOGIN_USER, LOGOUT_USER, ADD_POINTS } from '../actions/user'
import initialState from "../initialState";

const user = (state = initialState.users, {type, payload}) => {
    switch(type) {
        case ADD_USER:
            return {
                    userLogin: { ...state.userLogin },
                    usersList: [...state.usersList, payload]
                }
        case LOGIN_USER:
            return {
                    userLogin: { ...payload },
                    usersList: state.usersList.filter(user => user.nick !== payload.nick)
                }
        case LOGOUT_USER:
            return {
                    userLogin: {},
                    usersList: [ ...state.usersList, payload ]
                }
        case ADD_POINTS:
            return {
                ...state,
                userLogin: {
                    ...state.userLogin,
                    points: state.userLogin.points + payload
                }
            }
        default:
            return state
    }
}

export default user
