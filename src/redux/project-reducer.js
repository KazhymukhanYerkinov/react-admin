const SET_PROJECT_TOGGLE_HEIGHT = 'SET_PROJECT_TOGGLE_HEIGHT';



let initialState = {
    height: 0,
}

const projectReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROJECT_TOGGLE_HEIGHT:
            return {
                ...state,
                height: action.height
            }
        default:
            return state;
    }
}

export const setProjectToggleHeight = (height) => ({ type: SET_PROJECT_TOGGLE_HEIGHT, height });


export default projectReducer;