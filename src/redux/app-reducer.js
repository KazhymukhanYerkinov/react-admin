import { chackAuth } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCESS';

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS });


export const initalizeApp = () => (dispatch) => {

    let promise = dispatch(chackAuth());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}

export default appReducer;