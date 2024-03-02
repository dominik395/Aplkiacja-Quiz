import Home from "../components/Home";
import { connect } from "react-redux";

const mapState = ( store ) => ({
    users: store.user
})

export default connect(mapState)(Home)