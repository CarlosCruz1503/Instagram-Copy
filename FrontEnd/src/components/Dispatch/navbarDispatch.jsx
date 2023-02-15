import { connect } from 'react-redux'
import { getBlogs, LogOut, reloadingUser } from "../../redux/actions/actions"
import Navbar from '../pure/navbar'
const mapStateToProps = (state) => {
    return {
        userIn: state.userState.userIn,
        user_name: state.userState.user_name,
        image: state.userState.image,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logOut: () => {
            dispatch(LogOut())
            dispatch(reloadingUser())
        },
        reload: () => {
            dispatch(reloadingUser())
        },
        reloadBlogs: () => {
            dispatch(getBlogs())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Navbar)