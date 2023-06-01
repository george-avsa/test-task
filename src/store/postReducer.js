export const postsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_POSTS': {
            return action.payload
        }
        case 'SET_COMMENTS': {
            const [postId, comments] = action.payload;
            return state.map(post => {
                if (post.id === +postId) {
                    post.commentsList = comments;
                    post.commentsLoaded = true;
                    post.commentsHidden = false;
                    post.isLoading = false;
                }
                return post;
            });
        }
        case 'TOGGLE_VISIBILITY': {
            return state.map(post => {
                if (post.id === +action.payload) {
                    post.commentsHidden = !post.commentsHidden;
                }
                return post;
            })
        }
        case 'GET_COMMENTS': {
            return state.map(post => {
                if (post.id === +action.payload) {
                    post.isLoading = true;
                }
                return post;
            });
        }
        default: // need this for default case
            return state;
    }
}

export const setPosts = (payload) => ({type: 'SET_POSTS', payload});
export const fetchPosts = () => ({type: 'FETCH_POSTS'})

export const toggleVisibility = (payload) => ({type: 'TOGGLE_VISIBILITY', payload});

export const setComments = (payload) => ({type: 'SET_COMMENTS', payload});
export const getComments = (payload) => {
    return {type: 'GET_COMMENTS', payload}
};