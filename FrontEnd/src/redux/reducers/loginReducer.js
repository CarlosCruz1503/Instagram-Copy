let initialState
if (localStorage.getItem("token") === null) {
    initialState = {
        getting: false,
        logged: false,
        error: null,
        token: null
    }
}
else {
    initialState = {
        getting: false,
        logged: true,
        error: null,
        token: localStorage.getItem("token")
    }
}


export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_GETTING":
            return {
                ...state,
                getting: true,
                logged: false,
                error: null,
                token: null,
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                getting: false,
                logged: true,
                error: null,
                token: action.payload.token,
            }
        case "LOGIN_FAIL":
            return {
                ...state,
                getting: false,
                logged: false,
                error: action.payload.error,
                token: null,
            }
        case "LOGOUT":
            localStorage.removeItem("token")
            return {
                ...state,
                getting: false,
                logged: false,
                error: null,
                token: null,
            }

        default:
            return state
    }
}