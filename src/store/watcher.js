import { fetchPostWorker, getPostCommentsWorker } from "./postSaga";
import { all, takeEvery } from "redux-saga/effects";
import { fetchUsersPostsWorker, fetchUsersWorker } from "./usersSaga";

export function *watchAll() {
    yield all([
        takeEvery('FETCH_USERS', fetchUsersWorker),
        takeEvery('FETCH_USERS_POSTS', fetchUsersPostsWorker),

        takeEvery('FETCH_POSTS', fetchPostWorker),
        takeEvery('GET_COMMENTS', getPostCommentsWorker)
    ]);
  }