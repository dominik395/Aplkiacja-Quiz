import { connect } from "react-redux";
import SingUp from "../components/singUp/SingUp";
import { add_user } from "../../redux/actions/user";

const mapDispatch = ( dispatch ) => ({
    addUser: (user) => dispatch(add_user(user))
})

export default connect(null, mapDispatch)(SingUp)