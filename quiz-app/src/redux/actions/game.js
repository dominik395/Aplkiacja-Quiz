const SELECT_CATEGORY_GAME = 'SELECT_CATEGORY_GAME'
const CHANGE_CURRENT_POINTS_AND_SAVE_ANSWER = 'CHANGE_CURRENT_POINTS_AND_SAVE_ANSWER'
const RESET_CURRENT_GAME = 'RESET_CURRENT_GAME'

const select_category_game = (category) => ({
    type: SELECT_CATEGORY_GAME,
    payload: category
})

const change_current_points_and_answer = (modulo) => ({
    type: CHANGE_CURRENT_POINTS_AND_SAVE_ANSWER,
    payload: modulo
})

const reset_current_game = () => ({
    type: RESET_CURRENT_GAME,
    payload: null
})

export { SELECT_CATEGORY_GAME, select_category_game,
     CHANGE_CURRENT_POINTS_AND_SAVE_ANSWER, change_current_points_and_answer,
      RESET_CURRENT_GAME, reset_current_game 
    }