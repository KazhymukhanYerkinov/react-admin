import React from 'react';
import AnimateHeight from 'react-animate-height';
import { Field, reduxForm } from 'redux-form';
import './ToggleModule.css';


const ToggleFooter = (props) => {

    const handleClose = () => {
        props.setLocationHeight(0)
    }


    return (
        <div className = "fixed-bottom foter">
            <AnimateHeight
                    id='example-panel'
                    duration={ 500 }
                    height={ props.height }>   

                        <div className = "d-flex justify-content-between p-2 top-foter">
                            {props.editBtn ? <span className = "staf_text p-2"> update city </span>: <span className = "staf_text p-2"> add new city </span>}
                            <button className = 'btn app-toggle-close' onClick = { handleClose }> &times; </button>
                        </div>


                        <form> 
                        <div className = "d-flex">   
                            <div className = "justify-content-start ml-5 mr-5 mb-5 mt-4">
                                <h6> Название города </h6>
                                <input type="text" component = {'input'} className = "form-control" placeholder="Название города" name = {'full_name'} /> 
                            </div> 

                            <div className = "justify-content-start ml-5 mr-5 mb-5 mt-4">
                                <p>	&nbsp;</p>
                            
                                {props.editBtn ? <button className = "btn btn-primary  btn-block" aria-describedby="basic-addon1"> Изменить </button>:
                                               <button className = "btn btn-primary  btn-block" aria-describedby="basic-addon1"> Добавить </button>}
                            </div>
                        </div>
                    </form>
                        
                    
                </AnimateHeight>
            </div>
    )
}

export default ToggleFooter;