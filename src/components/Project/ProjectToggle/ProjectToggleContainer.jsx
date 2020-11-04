import React from 'react';import { connect } from 'react-redux';
import { setProjectToggleHeight } from '../../../redux/project-reducer';
import ProjectToggle from './ProjectToggle';


const ProjectToggleContainer = (props) => {
    return <ProjectToggle height = {props.height} setProjectToggleHeight = {props.setProjectToggleHeight} />
}

let mapStateToProps = (state) => ({ 
    height: state.projectPage.height,
 })

export default  connect(mapStateToProps, { setProjectToggleHeight })(ProjectToggleContainer)