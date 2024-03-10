import Home from "../components/home/Home";
import { connect } from "react-redux";
import { reset_current_game } from "../../redux/actions/game";

const mapState = ( store ) => {
    return {
        user: store.user.userLogin
    }
}

const mapDispatch = ( dispatch ) => ({
    reset: () => dispatch(reset_current_game())
})

export default connect(mapState, mapDispatch)(Home)