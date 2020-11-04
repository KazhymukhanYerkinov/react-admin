import React from 'react';
import './ProjectNavbarModule.css';


const ProjectNavbar = (props) => {
    return (
        <div className = 'row'>
            <div className = 'col-md-5'>

            </div>
            <div class="col-md-4 input-group">
                
                <input class="form-control border-right-0 border" type="search" placeholder = "Search"/>
                <span class="input-group-append">
                    <div class="input-group-text bg-transparent"><i class="fa fa-search"></i></div>
                </span>  
            </div>

            <div className = 'col-md-3'>
                <button type="button" class="btn btn-primary w-100" onClick = {() => {props.setProjectToggleHeight(400)}}> Добавить проект </button>
            </div>
        </div>
    )

}

export default ProjectNavbar;