
import { APIURL } from "../../utils/axios";

export const API_CALL_REQUEST = "API_CALL_REQUEST"; // Watcher Saga Listens
export const API_CALL_SUCCESS = "API_CALL_SUCCESS"; // Dispached by worked saga
export const API_CALL_FAILURE = "API_CALL_FAILURE"; // Dispached by worked saga


export const Login = (email, password) => {
    return {
        type: "LOGIN_GETTING",
        payload: {
            request: {
                method: "POST",
                url: `${APIURL}users/login/`,
                data: {
                    email: email,
                    password: password
                },
            },
            okAction: "LOGIN_SUCCESS",
            failAction: "LOGIN_FAIL"
        },
    }
}
export const LogOut = () => {
    return {
        type: "LOGOUT",
        payload: {
        },
    }
}

export const registerAction = (data) => {
    return {
        type: API_CALL_REQUEST,
        payload: {
            request: {
                method: "post",
                url: `${APIURL}users/register/`,
                data: data,
            },
            okAction: API_CALL_SUCCESS,
            failAction: API_CALL_FAILURE
        }
    }
}
export const reloadingUser = () => {
    return {
        type: "RELOADING_USER",
        payload: {
        }
    }
}
export const getBlogs = () => {
    return {
        type: "RELOADING_BLOGS",
        payload: {
            request: {
                method: "GET",
                url: `${APIURL}blogs/getBlogs/`,
            },
            okAction: "RELOADING_BLOGS_SUCCESS",
            failAction: "RELOADING_BLOGS_FAIL"
        }
    }
}

