import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Staff from './Staff';
import { compose } from 'redux';
import { setCurrentPage, getStaffThunk, setEditorBtn, setToggleHeight, deleteStaffThunk, getDetailStaffThunk, setDetailStaff} from '../../redux/staff-reducer';



const StaffContainer = (props) => {


    
    useEffect( () => {
        props.getStaffThunk(props.currentPage, props.page, '', '');
    }, []);

    

    return <Staff currentPage = {props.currentPage}
                  count = {props.count}
                  staffs = {props.staffs}
                  page = {props.page}
                  isFetching = {props.isFetching}


                  setCurrentPage = {props.setCurrentPage}
                  setEditorBtn = {props.setEditorBtn}
                  setToggleHeight = {props.setToggleHeight}
                  getStaffThunk = {props.getStaffThunk}
                  getDetailStaffThunk = {props.getDetailStaffThunk}
                  deleteStaffThunk = {props.deleteStaffThunk}
                  setDetailStaff = {props.setDetailStaff}

                  />
}

let mapStateToProps = (state) => {
    return {
        currentPage: state.staffPage.currentPage,
        count: state.staffPage.count,
        staffs: state.staffPage.staffs,
        page: state.staffPage.page,
        isFetching: state.staffPage.isFetching,

    }
}
export default compose (
    connect(mapStateToProps, {
    setCurrentPage,
    getStaffThunk,
    setEditorBtn,
    setToggleHeight,
    getDetailStaffThunk,
    setDetailStaff,
    deleteStaffThunk}),
    )(StaffContainer);