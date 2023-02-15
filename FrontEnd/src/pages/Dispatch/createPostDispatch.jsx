import { connect } from 'react-redux'
import CreatePostPage from '../createPostPage'

const mapStateToProps = (state) => {
    return {
        user_name: state.userState.user_name,
        email:state.userState.email,
        token:state.loginState.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostPage)