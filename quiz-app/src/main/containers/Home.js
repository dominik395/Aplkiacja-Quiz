import Home from "../components/home/Home";
import { connect } from "react-redux";

const mapState = ( store ) => {
    return {
        user: store.users.userLogin
    }
}

export default connect(mapState)(Home)