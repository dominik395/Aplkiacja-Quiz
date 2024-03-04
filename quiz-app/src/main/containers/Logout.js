import Logout from "../components/logout/Logout";
import { connect } from 'react-redux'
import { logout_user } from "../../redux/actions/user";

const mapState = ( store ) => ({
    loginUser: store.users.userLogin
})

const mapDispatch = ( dispatch ) => ({
    logoutUser: (user) => dispatch(logout_user(user))
})

export default connect(mapState, mapDispatch)(Logout)