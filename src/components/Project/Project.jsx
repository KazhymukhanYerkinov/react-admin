import React from 'react';
import './ProjectModule.css'
import ProjectItem from './ProjectItem/ProjectItem';
import ProjectNavbarContainer from './ProjectNavbar/ProjectNavbarContainer';
import ProjectToggleContainer from './ProjectToggle/ProjectToggleContainer';



const Project = () => {
    return (
        
        <div className = 'app-project'>
            <ProjectNavbarContainer />
            <hr />
            <ProjectItem />
            <ProjectToggleContainer />
        </div>
    )

}

export default Project;