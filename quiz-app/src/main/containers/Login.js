import { connect } from "react-redux";
import Login from "../components/login/Login";
import { login_user } from "../../redux/actions/user";

const mapState = ( store ) => ({
    users: store.users.usersList
})

const mapDispatch = ( dispatch ) => ({
    loginUser: (user) => dispatch(login_user(user))
})

export default connect(mapState, mapDispatch)(Login)