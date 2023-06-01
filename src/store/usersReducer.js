export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USERS': {
            return action.payload
        }
        default: // need this for default case
            return state
    }
}

export const setPosts = (payload) => ({type: 'SET_USERS', payload});
export const fetchPosts = () => ({type: 'FETCH_USERS'})