import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Staff from './Staff';
import { setCurrentPage, getStaffThunk, setEditorBtn, setToggleHeight, deleteStaffThunk, getDetailStaffThunk, setOrderStaff , setSignInStaff} from '../../redux/staff-reducer';


const StaffContainer = (props) => {

    useEffect( () => {
        props.getStaffThunk(props.currentPage, props.page, '', '');
    }, []);

    return <Staff currentPage = {props.currentPage}
                  count = {props.count}
                  editorBtn = {props.editorBtn}
                  staffs = {props.staffs}
                  page = {props.page}

                  setCurrentPage = {props.setCurrentPage}
                  setEditorBtn = {props.setEditorBtn}
                  setToggleHeight = {props.setToggleHeight}
                  getStaffThunk = {props.getStaffThunk}
                  getDetailStaffThunk = {props.getDetailStaffThunk}
                  deleteStaffThunk = {props.deleteStaffThunk}
                  setOrderStaff = {props.setOrderStaff}
                  setSignInStaff = {props.setSignInStaff}

                  />
}

let mapStateToProps = (state) => {
    return {
        currentPage: state.staffPage.currentPage,
        count: state.staffPage.count,
        editorBtn: state.staffPage.editorBtn,
        staffs: state.staffPage.staffs,
        page: state.staffPage.page,


    }
}
export default connect(mapStateToProps, {
    setCurrentPage,
    getStaffThunk,
    setEditorBtn,
    setToggleHeight,
    getDetailStaffThunk,
    deleteStaffThunk,
    setOrderStaff,
    setSignInStaff,
})(StaffContainer);