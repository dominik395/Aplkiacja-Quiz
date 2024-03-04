const ADD_USER = 'ADD_USER'
const LOGIN_USER = 'LOGIN_USER'

const add_user = (user) => ({
    type: ADD_USER,
    payload: user
})

const login_user = (user) => ({
    type: LOGIN_USER,
    payload: user
})

export { ADD_USER, add_user, LOGIN_USER, login_user }