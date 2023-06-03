const initialState = {
    dropdownHidden: false,
    fetchError: false,
    postsLoaded: false,
}


export const settingReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_DROPDOWN': {
            return {
                ...state, 
                dropdownHidden: !state.dropdownHidden
            }
        }
        case 'SET_FETCH_ERROR': {
            return {
                ...state,
                fetchError: true
            }
        }
        case 'SET_POSTS_LOADED': {
            return {
                ...state,
                postsLoaded: true
            }
        }
        default:
            return state;
    }
}

export const toggleDropdown = () => ({type: 'TOGGLE_DROPDOWN'});
export const setPostsLoaded = () => ({type: 'SET_POSTS_LOADED'});
export const setFetchError = () => ({type: 'SET_FETCH_ERROR'});