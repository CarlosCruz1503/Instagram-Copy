import { applyMiddleware, legacy_createStore, compose } from "redux";
import { rootReducer } from "../reducers/rootReducers";
import createSagaMiddleware from "redux-saga"
import { watcherLoginAPI, watcherHttpAPI } from "../sagas/sagas";

export const createAsyncStore = () => {
    const SagaMiddleware = createSagaMiddleware()
    let store = legacy_createStore(
        rootReducer,
        applyMiddleware(SagaMiddleware),
    )
    SagaMiddleware.run(watcherLoginAPI)
    return store
}