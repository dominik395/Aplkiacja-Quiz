import PlayMainViewForm from "../components/play/PlayMainViewForm";
import { connect } from 'react-redux'

const mapState = ( store ) => ({
    categoryList: store.categoryList
})


export default connect(mapState)(PlayMainViewForm)