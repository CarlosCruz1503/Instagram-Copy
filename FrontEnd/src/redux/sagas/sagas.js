import { takeLatest, call, put } from 'redux-saga/effects';
import jwt_decode from "jwt-decode";
import axios from "axios"
import { API_CALL_REQUEST } from '../actions/actions';
import { config, instance,APIURL } from '../../utils/axios';

export function* watcherLoginAPI() {
    yield takeLatest("LOGIN_GETTING", workerLoginAPI);
    yield takeLatest(API_CALL_REQUEST, workerSaga);
    yield takeLatest("RELOADING_USER", workerReloaderUserSaga);
    yield takeLatest("RELOADING_BLOGS", workerReloaderBlogsSaga);
}

export function* workerLoginAPI(action) {
    try {
        const response = yield call(axiosHttp(action.payload.request))
        const token = response.data.token
        yield put({
            type: action.payload.okAction,
            payload: {
                token: token
            }
        })
        localStorage.setItem("token", token)
    } catch (error) {
        yield put({
            type: action.payload.failAction,
            payload: {
                error: error
            }
        })
    }
}

export function* workerSaga(action) {
    try {
        const response = yield call(axiosHttp(action.payload.request))
        // We Obtain the token from response
        yield put({
            type: action.payload.okAction, // API_CALL_SUCCESS
            payload: {
                response: response.data
            }
        });
    } catch (error) {
        yield put({
            type: action.payload.failAction, // API_CALL_FAILURE
            payload: {
                error: error
            }
        });
    }
}
export function* workerReloaderUserSaga(action) {
    try {
        const decoded = jwt_decode(localStorage.getItem("token"));
        const request = {
            url:`${APIURL}users/onlyUser/${decoded.user_id}`,
            method:"get"
        }
        const response = yield call(axiosHttp(request))
        const data = response.data
        yield put({
            type: "RELOADING_USER_SUCCESS", // API_CALL_FAILURE
            payload: {
                id: data.id,
                user_name: data.user_name,
                first_name: data.first_name,
                email: data.email,
                is_admin: data.is_admin,
                bio: data.bio,
                image: data.image,
            }
        });

    } catch (error) {
        yield put({
            type: "RELOADING_USER_FAIL", // API_CALL_FAILURE
            payload: {
            }
        });
    }
}
export function* workerReloaderBlogsSaga(action) {
    try {
        const response = yield call(axiosHttpWithPermissions(action.payload.request))
        // We Obtain the token from response
        yield put({
            type: action.payload.okAction, // API_CALL_SUCCESS
            payload: {
                blogs: response.data
            }
        });
    } catch (error) {
        yield put({
            type: action.payload.failAction, // API_CALL_FAILURE
            payload: {
                error: error
            }
        });
    }
}

function axiosHttp(request) {
    return function () {
        return (axios(request))
    }
}
function axiosHttpWithPermissions(request) {
    return function () {
        return (instance(request,config(localStorage.getItem("token"))))
    }
}
