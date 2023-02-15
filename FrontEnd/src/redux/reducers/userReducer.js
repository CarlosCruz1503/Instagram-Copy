let initialState = {
    id:null,
    user_name: null,
    first_name: null,
    email: null,
    is_admin: null,
    bio: null,
    image: null,
    userIn:false,
}
export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RELOADING_USER": {
            return {
                ...state,
            }
        }
        case "RELOADING_USER_SUCCESS": {
            return {
                ...state,
                id:action.payload.id,
                user_name: action.payload.user_name,
                first_name: action.payload.first_name,
                email: action.payload.email,
                is_admin: action.payload.is_admin,
                bio: action.payload.bio,
                image: action.payload.image,
                userIn:true,
            }
        }
        case "RELOADING_USER_FAIL": {
            return {
                id:null,
                user_name: null,
                first_name: null,
                email: null,
                is_admin: null,
                bio: null,
                image: null,
                userIn:false,
            }
        }
        default:
            return state
    }
}


