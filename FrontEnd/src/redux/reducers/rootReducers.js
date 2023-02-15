import { loginReducer } from "./loginReducer";
import { combineReducers } from "redux";
import { registerReducer } from "./apiReducer";
import { userReducer } from "./userReducer";
import { blogReducer } from "./blogsReducer";
export const rootReducer = combineReducers(
    {
        registerState: registerReducer,
        loginState: loginReducer,
        userState: userReducer,
        blogState:blogReducer
    }
)