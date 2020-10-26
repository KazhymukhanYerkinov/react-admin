import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Location from './Location';
import { getLocationThunk, setLocationHeight, setLocationEdit } from '../../redux/location-reducer';



const LocationContainer = (props) => {
    useEffect( () => {
        props.getLocationThunk('');
    }, []);



    return <Location  cities = {props.cities}
                      getLocationThunk = { props.getLocationThunk }
                      setLocationEdit = {props.setLocationEdit}
                      setLocationHeight = {props.setLocationHeight} />
}


let mapStateToProps = (state) => {
    return {
        cities: state.locationPage.cities,
        height: state.locationPage.height,
        editBtn: state.locationPage.editBtn
    }
}

export default connect(mapStateToProps, {
    getLocationThunk,
    setLocationHeight,
    setLocationEdit,
})(LocationContainer)