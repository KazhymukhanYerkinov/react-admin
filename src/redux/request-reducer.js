import { requestAPI } from "../api/api";

const SET_REQUEST_CURRENT_PAGE = 'SET_REQUEST_CURRENT_PAGE';
const SET_REQUEST_COUNT = 'SET_REQUEST_COUNT';
const SET_REQUESTS = 'SET_REQUESTS';
const SET_REQUESTS_IS_FETCHING = 'SET_REQUESTS_IS_FETCHING';


let initialState = {
    currentPage: 1,
    count: 0,
    page: 8,

    requests: [],

    isFetching: false,

    
}


const requestReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_REQUEST_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_REQUESTS:
            return {
                ...state,
                requests: action.requests

            }
        case SET_REQUEST_COUNT:
            return {
                ...state,
                count: action.count
            }
        case SET_REQUESTS_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export const setCurrentPage = (currentPage) => ({ type: SET_REQUEST_CURRENT_PAGE,  currentPage});
const setRequests = (requests) => ({ type: SET_REQUESTS, requests });
const setTotalCount = (count) => ({ type: SET_REQUEST_COUNT, count });

const setIsFetching = (isFetching) => ({ type: SET_REQUESTS_IS_FETCHING, isFetching })


export const getRequests = (currentPage, page) => async (dispatch) => {
    dispatch(setIsFetching(true));
    let data = await requestAPI.getRequests(currentPage, page);
    dispatch(setRequests(data.results));
    dispatch(setTotalCount(data.count))
    dispatch(setIsFetching(false));
}

export const acceptRequest = (accept, code, currentPage, page) => async (dispatch) => {
    let data = await requestAPI.checkRequest(accept, code);
    console.log(data);
    dispatch(getRequests(currentPage, page));
}

export default requestReducer;