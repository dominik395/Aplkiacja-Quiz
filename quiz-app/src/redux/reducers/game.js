import { SELECT_CATEGORY_GAME } from "../actions/game";
import initialState from '../initialState'

const game = (state = initialState.game, {type, payload}) => {
    switch(type){
        case SELECT_CATEGORY_GAME:
            return {
                ...state,
                selectedGame: payload
            }
        default:
            return state
    }
}

export default game