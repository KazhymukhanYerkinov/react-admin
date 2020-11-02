
import { staffAPI } from "../api/api";
import { stopSubmit, reset } from 'redux-form';

const SET_TOGGLE_HEIGHT = 'SET_TOGGLE_HEIGHT';
const SET_EDITOR_BUTTON = 'SET_EDITOR_BUTTON';

const SET_STAFFS = 'SET_STAFFS';
const SET_STAFF_DETAIL = 'SET_DETAIL_STAFF';

const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const SET_STAFFS_IS_FETCHING = 'SET_STAFFS_IS_FETCHING';







// order and sigin add
// pages 2 dynamicaly
// optimization height + editorBtn //  detailStaff check in

let initialState = {

    height: 0,
    editorBtn: false,
    

    staffs: [],
    detailStaff: {},


    currentPage: 1,
    count: 200,
    page: 10,

    isFetching: false,


    


}

const staffReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_TOGGLE_HEIGHT:
            return {
                ...state,
                height: action.height
            }
        case SET_STAFFS:
            return {
                ...state,
                staffs: action.staffs
            }
        case SET_TOTAL_COUNT:
            return {
                ...state,
                count: action.count
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_EDITOR_BUTTON:
            return {
                ...state,
                editorBtn: action.editorBtn
            }
        case SET_STAFF_DETAIL:
            return {
                ...state,
                detailStaff: action.detailStaff
            }
        case SET_STAFFS_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }

        

        default:
            return state;
    }
}

export const setToggleHeight = (height) => ({ type: SET_TOGGLE_HEIGHT, height });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setEditorBtn = (editorBtn) => ({ type: SET_EDITOR_BUTTON, editorBtn });
export const setDetailStaff = (detailStaff) => ({ type: SET_STAFF_DETAIL, detailStaff });


const setStaffs = (staffs) => ({ type: SET_STAFFS, staffs });
const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count });
const setIsFetching = (isFetching) => ({ type: SET_STAFFS_IS_FETCHING, isFetching });





export const getStaffThunk = (currentPage, pageSize, order, sign) => async (dispatch) => {
    dispatch(setIsFetching(true));
    let data = await staffAPI.getStaffs(currentPage, pageSize, order, sign);
    dispatch(setTotalCount(data.count));
    dispatch(setStaffs(data.results));
    dispatch(setIsFetching(false));

}

export const createStaffThunk = (full_name, phone, position, email, level,password, currentPage, pageSize, order, sign) => async (dispatch) => {

    
    let res = await staffAPI.createStaffs(full_name, phone, position, email, level, password);

    if (res.statusText === 'Created') {
        dispatch(getStaffThunk(currentPage, pageSize, order, sign));
        dispatch(reset('staff'))
    }
        
    else {
        dispatch(stopSubmit("staff", {_error: "Номер телефона и адрес электронной почты не должны повторяться ! ! !"}));                   
    }

    
    
}

export const updateStaffThunk = (code, name, phone, role, email, level, password, currentPage, pageSize, order, sign) => async (dispatch) => {
    await staffAPI.updateStaff(code, name, phone, role, email, level, password);
    dispatch(getStaffThunk(currentPage, pageSize, order, sign));
}

export const deleteStaffThunk = (code, currentPage, pageSize, order, signin) => async (dispatch) => {
    await staffAPI.deleteStaff(code);
    dispatch(getStaffThunk(currentPage, pageSize, order, signin))
    
}

export const getDetailStaffThunk = (code) => async (dispatch) => {
    let data = await staffAPI.getStaffsDetail(code);
    dispatch(setDetailStaff(data));
} 



export default staffReducer;

