import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { postsReducer } from "./postReducer";
import { settingReducer } from "./settingsReducer";
import { watchAll } from "./watcher";
import { usersReducer } from "./usersReducer";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    posts: postsReducer,
    settings: settingReducer,
    users: usersReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAll);