import React from 'react';
import { connect } from 'react-redux';
import ToggleFooter from './ToggleFooter';
import { setToggleHeight, createStaffThunk, updateStaffThunk, setEditorBtn } from '../../../redux/staff-reducer';



const ToggleFooterContainer = (props) => {

    return <ToggleFooter setToggleHeight = {props.setToggleHeight}
                         setEditorBtn = {props.setEditorBtn}
                         createStaffThunk = {props.createStaffThunk}
                         updateStaffThunk = {props.updateStaffThunk}


                         initialValues = {props.initialValues}
                         editorBtn = {props.editorBtn}
                         height = {props.height}


                         currentPage = {props.currentPage}
                         page = {props.page }
                         order = {props.order}
                         signin = {props.sign}

                         />
}

let mapStateToProps = (state) => {
    return {

        height: state.staffPage.height,
        currentPage: state.staffPage.currentPage,
        page: state.staffPage.page,
        editorBtn: state.staffPage.editorBtn,

        initialValues: {
            code: state.staffPage.detailStaff.code,
            full_name: state.staffPage.detailStaff.full_name,
            position: state.staffPage.detailStaff.position,
            phone: state.staffPage.detailStaff.phone,
            email: state.staffPage.detailStaff.email,
            level: state.staffPage.detailStaff.level,
        }

    }
}
export default connect(mapStateToProps, {
    setToggleHeight,
    createStaffThunk,
    updateStaffThunk,
    setEditorBtn,
})(ToggleFooterContainer);