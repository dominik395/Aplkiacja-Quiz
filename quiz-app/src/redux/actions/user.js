const ADD_USER = 'ADD_USER'
const LOGIN_USER = 'LOGIN_USER'
const LOGOUT_USER = 'LOGOUT_USER'

const add_user = (user) => ({
    type: ADD_USER,
    payload: user
})

const login_user = (user) => ({
    type: LOGIN_USER,
    payload: user
})

const logout_user = (user) => ({
    type: LOGOUT_USER,
    payload: user
})

export { ADD_USER, add_user, LOGIN_USER, login_user, LOGOUT_USER, logout_user }