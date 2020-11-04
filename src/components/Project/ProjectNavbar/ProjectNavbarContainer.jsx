import React from 'react';
import { connect } from 'react-redux';
import { setProjectToggleHeight } from '../../../redux/project-reducer';
import ProjectNavbar from './ProjectNavbar';


const ProjectNavbarContainer = (props) => {
    return <ProjectNavbar setProjectToggleHeight = {props.setProjectToggleHeight} />
}


export default connect(null, { setProjectToggleHeight })(ProjectNavbarContainer);