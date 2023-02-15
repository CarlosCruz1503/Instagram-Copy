let initialState = {
    getting: false,
    blogs: null,
    error: null,
}
export const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case "RELOADING_BLOGS": {
            return {
                ...state,
                getting: true,
                error: null,
            }
        }
        case "RELOADING_BLOGS_SUCCESS": {
            return {
                ...state,
                getting: false,
                blogs: action.payload.blogs,
                error: null,
            }
        }
        case "RELOADING_BLOGS_FAIL": {
            return {
                ...state,
                getting: false,
                blogs: null,
                error: action.payload.error,
            }
        }
        default:
            return state
    }
}


