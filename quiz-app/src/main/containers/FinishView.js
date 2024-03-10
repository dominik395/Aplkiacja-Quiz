import FinishView from "../components/play/FinishView";
import { connect } from "react-redux";

const mapState = ( store ) => ({
    stats: store.game.currentGame
})

export default connect(mapState)(FinishView)