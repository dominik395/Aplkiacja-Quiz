import PlayMainView from "../components/play/PlayMainView";
import { connect } from "react-redux";
import { select_category_game } from "../../redux/actions/game";

const mapDispatch = ( dispatch ) => ({
    selectedCategory: category => dispatch(select_category_game(category))
})

export default connect(null, mapDispatch)(PlayMainView)