import { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from "../actions/actions";

const initialState = {
    loading: false,
    response: null,
    error: null,
    success:null,
}
export const registerReducer = (state = initialState, action) => {

    switch (action.type) {
        case API_CALL_REQUEST:
            return {
                ...state,
                loading: true,
                response: null,
                error: null,
                success:null,
            }
        case API_CALL_SUCCESS:
            return {
                ...state,
                loading: false,
                response: action.payload.response,
                error: null,
                success:true,
            }
        case API_CALL_FAILURE:
            return {
                ...state,
                loading: false,
                response: null,
                error: action.payload.error,
                success:false,
            }
        default:
            return state;
    }
}
