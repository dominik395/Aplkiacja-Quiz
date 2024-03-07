import GameView from "../components/play/game/GameView";
import { connect } from "react-redux";

const mapState = ( store ) => ({
    selectedCategory: store.game.selectedGame
})

export default connect(mapState)(GameView)