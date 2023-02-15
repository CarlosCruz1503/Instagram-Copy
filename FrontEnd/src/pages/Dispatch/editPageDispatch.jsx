import { connect } from 'react-redux'
import { reloadingUser } from "../../redux/actions/actions"
import EditProfilePage from '../editProfilePage'

const mapStateToProps = (state) => {
    return {
        id: state.userState.id,
        user_name: state.userState.user_name,
        image: state.userState.image,
        bio: state.userState.bio,
        email:state.userState.email,
        token:state.loginState.token,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        reload: () => {
            dispatch(reloadingUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfilePage)