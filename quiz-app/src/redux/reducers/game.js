import { SELECT_CATEGORY_GAME, CHANGE_CURRENT_POINTS_AND_SAVE_ANSWER } from "../actions/game";
import initialState from '../initialState'

const game = (state = initialState.game, {type, payload}) => {
    switch(type){
        case SELECT_CATEGORY_GAME:
            return {
                ...state,
                selectedGame: payload
            }
        case CHANGE_CURRENT_POINTS_AND_SAVE_ANSWER:
            return {
                ...state,
                currentGame: { 
                    points: 0 + Number(payload.points),
                    correctAnswer: [ ...state.currentGame.correctAnswer, payload.correct ],
                    wrongAnswer: [ ...state.currentGame.wrongAnswer, payload.wrong]
                }
            }
        default:
            return state
    }
}

export default game