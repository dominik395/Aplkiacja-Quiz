import QuestionsButtons from "../components/play/game/QuestionsButtons";
import { connect } from 'react-redux'
import { change_current_points_and_answer } from "../../redux/actions/game";

const mapDispatch = ( dispatch ) => ({
    uploadStats: (data) => dispatch(change_current_points_and_answer(data))
})

export default connect(null, mapDispatch)(QuestionsButtons)