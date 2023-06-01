const initialState = {
    dropdownHidden: false,
}


export const settingReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_DROPDOWN': {
            return {
                ...state, 
                dropdownHidden: !state.dropdownHidden
            }
        }
        default:
            return state;
    }
}

export const toggleDropdown = () => ({type: 'TOGGLE_DROPDOWN'});