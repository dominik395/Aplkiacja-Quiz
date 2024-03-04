import Home from "../components/Home";
import { connect } from "react-redux";

const mapState = ( store ) => {
    console.log(store, 'z home')
    return {
        user: store.users.userLogin
    }
}

export default connect(mapState)(Home)