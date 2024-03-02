const ADD_USER = 'ADD_USER'
const ACTIVE_USER = 'ACTIVE_USER'

const add_user = (user) => ({
    type: ADD_USER,
    payload: user
})

const active_user = (userData) => ({
    type: ACTIVE_USER,
    payload: userData
})

export { ADD_USER, add_user, ACTIVE_USER, active_user }