import { connect } from 'react-redux'
import { getBlogs} from "../../redux/actions/actions"
import MyHeartsPage from '../myHeartsPage'

const mapStateToProps = (state) => {
    return {
        token:state.loginState.token,
        ourUser_name: state.userState.user_name,
        blogs:state.blogState.blogs,
        ourId:state.userState.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        reloadBlogs: () => {
            dispatch(getBlogs())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHeartsPage)