import React from 'react';
import AnimateHeight from 'react-animate-height';
import cls from './ProjectToggle.module.css';


const ProjectToggle = (props) => {
    return (
        <div className = {`fixed-bottom ${cls.app_footer}`}>
        <AnimateHeight
            duration = { 500 }
            height = { props.height }>
        
            <div className = "d-flex justify-content-between pl-3 pr-3 pt-3 pb-1">
                <div>
                    <span className = "staf_text p-2"> Добавить нового проекта </span>
                </div>

                
                <div>
                    <button className = 'btn app-toggle-close' onClick = {() => { props.setProjectToggleHeight(0) }}> &times; </button>
                </div>
            </div>

            <hr />

        </AnimateHeight>
        </div>
    )
}

export default ProjectToggle;