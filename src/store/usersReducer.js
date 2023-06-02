export const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_USERS': {
            return {...action.payload, postsHidden: true, postLoaded: true, posts: []}
        }
        case 'TOGGLE_VISIBILITY': {
            return {...state, postsHidden: !state.postsHidden}
        }
        case 'SET_USERS_POSTS': {
            return {...state, posts: action.payload, postsHidden: false, postLoaded: false}
        }
        default: // need this for default case
            return state
    }
}

export const toggleVisibility = () => ({type: 'TOGGLE_VISIBILITY'});

export const setUsersPosts = (payload) => ({type: 'SET_USERS_POSTS', payload});
export const fetchUsersPosts = (payload) => ({type: 'FETCH_USERS_POSTS', payload});

export const setUsers = (payload) => ({type: 'SET_USERS', payload});
export const fetchPosts = (payload) => ({type: 'FETCH_USERS', payload});