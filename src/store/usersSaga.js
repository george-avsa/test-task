
import { call, put } from "redux-saga/effects";
import { setUsers } from "./postReducer";
import { takeEvery } from "redux-saga/effects";


const fetchUsers  = () => fetch('https://jsonplaceholder.typicode.com/users');

function* fetchUsersWorker () {
    const data = yield call(fetchUsers);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield put(setUsers(json));
}

export function* usersWatcher () {
    yield takeEvery('FETCH_USERS', fetchUsersWorker);
}