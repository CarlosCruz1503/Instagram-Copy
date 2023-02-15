import axios from "axios"
export const APIURLIMAGEBLOGVIEW = 'https://carlosjose445566.pythonanywhere.com/media/'
export const APIURLIMAGE = 'https://carlosjose445566.pythonanywhere.com'
export const APIURL = 'https://carlosjose445566.pythonanywhere.com/'

export const config = (token) => {
    return {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
}
export const configForm = (token) => {
    return {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`
        }
    }
}


export const instance = axios.create({
    baseURL: APIURL
});