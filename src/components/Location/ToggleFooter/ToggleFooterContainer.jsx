import React from 'react';
import { connect } from 'react-redux';
import ToggleFooter from './ToggleFooter';
import { setLocationEdit, setLocationHeight } from '../../../redux/location-reducer';




const ToggleFooterContainer = (props) => {
    return <ToggleFooter height = {props.height}
                         editBtn = {props.editBtn}
                         
                         setLocationHeight = {props.setLocationHeight}
                         setLocationEdit = {props.setLocationEdit}
                         />
}


let mapStateToProps = (state) => {
    return {
        height: state.locationPage.height,
        editBtn: state.locationPage.editBtn,
    }
}


export default connect(mapStateToProps, {
    setLocationHeight,
    setLocationEdit,
})(ToggleFooterContainer)