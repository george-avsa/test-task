import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { postsReducer } from "./postReducer";
import { useWatcher } from "./postSaga";
import { settingReducer } from "./settingsReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    posts: postsReducer,
    settings: settingReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(useWatcher);