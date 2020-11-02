import * as axios from 'axios';
import { authAPI } from "../api/api";
import { stopSubmit } from 'redux-form';

const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
const LOGIN_FAIL = 'LOGIN_FAIL';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAIL = 'LOAD_USER_FAIL';
const AUTHENTICATED_SUCCESS = 'AUTHENTICATED_SUCCESS';
const AUTHENTICATED_FAIL = 'AUTHENTICATED_FAIL';
const LOGOUT = 'LOGOUT';

const DIALOG_IS_OPEN = 'DIALOG_IS_OPEN';


// ACCEPT LIST

let initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuth: null,
    user: {},
    isOpen: false,
}


const authReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuth: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('refresh', payload.refresh);
            localStorage.setItem('access', payload.access)          
            return {
                ...state,
                isAuth: true,
                access: payload.access,
                refresh: payload.refresh,
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isAuth: false
            }
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                user: payload
            }
        case LOAD_USER_FAIL:
            return {
                ...state,
                user: null
            }
        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuth: false
            }
        case DIALOG_IS_OPEN:
            return {
                ...state,
                isOpen: action.isOpen
            }
        case SIGN_UP_FAIL:
        case LOGOUT:
        case LOGIN_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            return {
                ...state,
                access: null,
                refresh: null,
                isAuth: false,
                user: null,
            }
        
        default:
            return state;
    }
}

export const setIsOpen = (isOpen) => ({ type: DIALOG_IS_OPEN, isOpen })

export const chackAuth = () => async (dispatch) => {
    if (localStorage.getItem('access')) { 
        await authAPI.checkAuth();
        dispatch({ type: AUTHENTICATED_SUCCESS });
    }
    else {
        console.log("BUL JER EMES")
    }
}

export const load_user = () => async (dispatch) => {
    if (localStorage.getItem('access')) {     
        try {
            const data = await authAPI.getUser();
            dispatch({ type: LOAD_USER_SUCCESS, payload: data })
        } catch (err) {
            dispatch({ type: LOAD_USER_FAIL })
        }
    }
    else {
        dispatch({ type: LOAD_USER_FAIL })
    }
}

export const login = (email, password) => async (dispatch) => {
        try {
            let data = await authAPI.login(email, password);
            dispatch({ type: LOGIN_SUCCESS, payload: data })
            dispatch(load_user());
        }
        catch(err) {
            dispatch(stopSubmit("signin", {_error: "wrong password or email"}))
            dispatch({ type: LOGIN_FAIL })
        }    
}

export const signup = (email, full_name, phone , password, re_password) => async (dispatch) => {

    
    if (password === re_password) {
        try {
            const config = {
                headers: { 'Content-Type': 'application/json' }
            }
            const body = JSON.stringify({ email, full_name, phone,  password, re_password });


            const res = await axios.post(`https://dashboard-i-con.herokuapp.com/api/auth/users/`, body, config)

            console.log(res);

            dispatch({ type: SIGN_UP_SUCCESS });
            dispatch(setIsOpen(true));

        }
        catch (err) {
            dispatch({ type: SIGN_UP_FAIL });
            dispatch(stopSubmit("signup", {_error: "phone and email unique"}))
        }
    }
    else {
        dispatch(stopSubmit("signup", {'re_password': "pass1 and pass2 ten emes"}))
    }
}

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT
    })
}


export default authReducer;