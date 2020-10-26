import { staffAPI } from "../api/api";

const SET_TOGGLE_HEIGHT = 'SET_TOGGLE_HEIGHT';
const SET_EDITOR_BUTTON = 'SET_EDITOR_BUTTON';

const SET_STAFFS = 'SET_STAFFS';
const SET_STAFF_DETAIL = 'SET_DETAIL_STAFF';

const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const SET_ORDER_STAFFS = 'SET_ORDER_STAFFS';
const SET_SIGNIN_STAFFS = 'SET_SIGNIN_STAFFS';




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
    page: 2,

    order: '',
    signin: '',


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
        case SET_ORDER_STAFFS:
            return {
                ...state,
                order: action.order
            }
        case SET_SIGNIN_STAFFS:
            return {
                ...state,
                signin: action.signin
            }
        default:
            return state;
    }
}

export const setToggleHeight = (height) => ({ type: SET_TOGGLE_HEIGHT, height });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setEditorBtn = (editorBtn) => ({ type: SET_EDITOR_BUTTON, editorBtn });
export const setDetailStaff = (detailStaff) => ({ type: SET_STAFF_DETAIL, detailStaff });

export const setOrderStaff = (order) => ({ type: SET_ORDER_STAFFS, order });
export const setSignInStaff = (signin) => ({ type: SET_SIGNIN_STAFFS, signin });

const setStaffs = (staffs) => ({ type: SET_STAFFS, staffs });
const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count });




export const getStaffThunk = (currentPage, pageSize, order, sign) => async (dispatch) => {
    let respone = await staffAPI.getStaffs(currentPage, pageSize, order, sign);
    dispatch(setTotalCount(respone.count));
    dispatch(setStaffs(respone.results));
}

export const createStaffThunk = (name, phone, role, email, level, currentPage, pageSize, order, sign) => async (dispatch) => {
    await staffAPI.createStaffs(name, phone, role, email, level);
    dispatch(getStaffThunk(currentPage, pageSize, order, sign));
}

export const updateStaffThunk = (code, name, phone, role, email, level, currentPage, pageSize, order, sign) => async (dispatch) => {
    await staffAPI.updateStaff(code, name, phone, role, email, level);
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

