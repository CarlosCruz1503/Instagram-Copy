import { connect } from 'react-redux'
import { registerAction } from '../../redux/actions/actions'
import RegisterForm from '../../components/pure/registerForm'

const mapStateToProps = (state) => {
    return {
        loading: state.registerState.loading,
        success: state.registerState.success,
        errorState: state.registerState.error,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onRegister: (email, user_name, password) => {
            let data = {
                email: email,
                user_name: user_name,
                password: password,
            }
            dispatch(registerAction(data))
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)