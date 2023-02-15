import { connect } from 'react-redux'
import { Login } from "../../redux/actions/actions"
import LoginForm from '../pure/loginForm'

const mapStateToProps = (state) => {
    return {
        getting: state.loginState.getting,
        errorState: state.loginState.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onLogin:(email,password)=>{
            dispatch(Login(email,password))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)