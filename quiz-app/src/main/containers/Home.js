import Home from "../components/Home";
import { connect } from "react-redux";

const mapState = ( store ) => {
    return {
        users: store.users.usersList
    }
}

export default connect(mapState)(Home)