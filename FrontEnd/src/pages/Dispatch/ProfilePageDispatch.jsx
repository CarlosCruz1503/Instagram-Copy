import { connect } from 'react-redux'
import { reloadingUser } from "../../redux/actions/actions"
import ProfilePage from '../profilePage'

const mapStateToProps = (state) => {
    return {
        ourId: state.userState.id,
        blogs:state.blogState.blogs,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        reload:()=>{
            dispatch(reloadingUser())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage)