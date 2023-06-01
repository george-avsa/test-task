
import { call, put } from "redux-saga/effects";
import { setComments, setPosts } from "./postReducer";
import { takeEvery } from "redux-saga/effects";
import axios from "axios";


const getPosts  = () => axios.get('https://jsonplaceholder.typicode.com/posts');
const getComments = () => axios.get('https://jsonplaceholder.typicode.com/users');
const getPostComment = (postId) => axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`);

const delay = time => new Promise(resolve => setTimeout(resolve, time));

function* fetchPostWorker () {
    const postsResponse = yield call(getPosts);
    const usersResponse = yield call(getComments);
    yield call(delay, 500);
    const posts = Array.from(postsResponse.data).map(post => {
        let authorName;
        usersResponse.data.forEach(author => {
            if (author.id === post.userId) {
                authorName = author.name;
            } 
        })
        const newPost = {
            ...post, 
            commentsHidden: true, 
            commentsList: [], 
            commentsLoaded: false, 
        };
        if (authorName) {
            newPost.authorName = authorName;
        }
        return newPost;
    });
    yield put(setPosts(posts));
}

function* getPostCommentsWorker({payload}) {
    try {
        const commentsResponse = yield call(getPostComment, payload);
        yield call(delay, 500);
        yield put(setComments([payload, commentsResponse.data]));
    } catch (e) {
        
    }
}

export function* useWatcher () {
    yield takeEvery('FETCH_POSTS', fetchPostWorker);
    yield takeEvery('GET_COMMENTS', getPostCommentsWorker);
}