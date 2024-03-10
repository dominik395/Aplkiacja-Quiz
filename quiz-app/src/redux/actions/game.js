const SELECT_CATEGORY_GAME = 'SELECT_CATEGORY_GAME'
const CHANGE_CURRENT_POINTS_AND_SAVE_ANSWER = 'CHANGE_CURRENT_POINTS_AND_SAVE_ANSWER'

const select_category_game = (category) => ({
    type: SELECT_CATEGORY_GAME,
    payload: category
})

const change_current_points_and_answer = (modulo) => ({
    type: CHANGE_CURRENT_POINTS_AND_SAVE_ANSWER,
    payload: modulo
})

export { SELECT_CATEGORY_GAME, select_category_game,
     CHANGE_CURRENT_POINTS_AND_SAVE_ANSWER , change_current_points_and_answer }