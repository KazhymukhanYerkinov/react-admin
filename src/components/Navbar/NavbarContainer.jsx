import React from 'react';
import { connect } from 'react-redux';
import { setToggleHeight, setEditorBtn, setDetailStaff } from '../../redux/staff-reducer';
import Navbar from './Navbar';



const NavbarContainer = (props) => {
    return <Navbar height = {props.height}
                   setToggleHeight = {props.setToggleHeight}
                   setEditorBtn = {props.setEditorBtn}
                   setDetailStaff = {props.setDetailStaff} />
}


let mapStateToProps = (state) => {
    return {
        height: state.staffPage.height,
        
    }
}
export default connect(mapStateToProps, {
    setToggleHeight,
    setEditorBtn,
    setDetailStaff,
})(NavbarContainer)