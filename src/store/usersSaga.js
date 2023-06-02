
import { call, put } from "redux-saga/effects";
import { setUsers, setUsersPosts } from "./usersReducer";
import { store } from ".";


const fetchUsers  = (userId) => fetch('https://jsonplaceholder.typicode.com/users/'+userId);
const fetchUserPosts = (userId) => fetch('https://jsonplaceholder.typicode.com/posts?userId='+userId);

const delay = time => new Promise(resolve => setTimeout(resolve, time));

export function* fetchUsersWorker ({payload}) {
    const json = yield call(fetchUsers, payload);
    const data = yield call(() => new Promise(res => res(json.json())));
    data.address = {
        street: data.address.street,
        suite: data.address.suite,
        zipcode: data.address.zipcode,
    }
    yield call(delay, 500);
    yield put(setUsers(data));
}

export function* fetchUsersPostsWorker ({payload}) {
    const data = yield call(fetchUserPosts, payload);
    const json = yield call(() => new Promise(res => res(data.json())));
    yield call(delay, 500);
    yield put(setUsersPosts(json));
}

export function fetchUserPostsWorker() {

} 