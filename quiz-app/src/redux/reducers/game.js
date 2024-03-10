import { SELECT_CATEGORY_GAME, CHANGE_CURRENT_POINTS_AND_SAVE_ANSWER, RESET_CURRENT_GAME } from "../actions/game";
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
                    points: payload.points ? state.currentGame.points + 5 : state.currentGame.points - 3,
                    correctAnswer: payload.correct ? [ ...state.currentGame.correctAnswer, payload.correct ] : state.currentGame.correctAnswer,
                    wrongAnswer: payload.wrong ? [ ...state.currentGame.wrongAnswer, payload.wrong ] : state.currentGame.wrongAnswer
                }
            }
        case RESET_CURRENT_GAME:
            return {
                ...state,
                currentGame: {
                    points: 0,
                    correctAnswer: [],
                    wrongAnswer: []
                }
            }
        default:
            return state
    }
}

export default game