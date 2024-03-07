const SELECT_CATEGORY_GAME = 'SELECT_CATEGORY_GAME'

const select_category_game = (category) => ({
    type: SELECT_CATEGORY_GAME,
    payload: category
})

export { SELECT_CATEGORY_GAME, select_category_game }