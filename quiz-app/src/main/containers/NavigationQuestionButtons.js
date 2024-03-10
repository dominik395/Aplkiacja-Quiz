import NavigationQuestionButtons from "../components/play/game/NavigationQuestionButtons";
import { connect } from 'react-redux'
import { add_points } from "../../redux/actions/user";

const mapState = ( store ) => ({
    currentPoints: store.game.currentGame.points
})

const mapDispatch = ( dispatch ) => ({
    addPoints: (num) => dispatch(add_points(num))
})

export default connect(mapState, mapDispatch)(NavigationQuestionButtons)