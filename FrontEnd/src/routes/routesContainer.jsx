import { connect } from 'react-redux'
import RoutesComponent from './routes'
const mapStateToProps = (state) => {
    return {
        logged: state.loginState.logged,
    }
}



export default connect(mapStateToProps)(RoutesComponent)