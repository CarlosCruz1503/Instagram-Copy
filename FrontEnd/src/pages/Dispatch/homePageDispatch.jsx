import { connect } from 'react-redux'
import { getBlogs } from "../../redux/actions/actions"
import HomePage from '../homePage'

const mapStateToProps = (state) => {
    return {
        token:state.loginState.token,
        logged : state.loginState.logged,
        ourUser_name: state.userState.user_name,
        blogs:state.blogState.blogs,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        reloadBlogs: () => {
            dispatch(getBlogs())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)