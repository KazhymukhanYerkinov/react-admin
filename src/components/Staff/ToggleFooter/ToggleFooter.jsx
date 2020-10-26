import React, { useState } from 'react';
import './footerstyle.css';
import AnimateHeight from 'react-animate-height';
import { Field, reduxForm } from 'redux-form';



const ToggleFooterForm = (props) => {
    const role = ['Backend-Developer', 'Frontend-Developer', 'Fullstack-Developer', 'Менеджер'];
    const level = ['Администратор', 'Супер Администратор', 'Пользователь'];



    

    

    return (
                <form onSubmit = { props.handleSubmit }> 
                    <div className = "d-flex">   
                        <div className = "justify-content-start ml-5 mr-5 mb-5 mt-4">
                            <h6>Ф.И.О</h6>
                            <Field type="text" component = {'input'} className = "form-control" placeholder="Username" name = {'full_name'} /> 

                            <h6 className = "mt-2">Телефон номера</h6>
                            <Field type="tel" component = {'input'} className = "form-control" placeholder="8 777 456 23 23" name = {'phone'}/>
                        </div> 

                        <div className = "justify-content-start ml-5 mr-5 mb-5 mt-4">
                            <h6>Должность</h6>
                            <Field  className="form-control" name = {'position'} component = {'select'}>
                                <option value = ''></option>
                                {role.map(r => <option value = {r}> {r} </option>)}
                            </Field>

                            <h6 className = "mt-2">Email</h6>
                            <Field type="email" component = {'input'} className = 'form-control' name = {'email'} placeholder = "Электронный адрес" />
                        </div>

                        <div className = "justify-content-start ml-5 mr-5 mb-5 mt-4">
                            <h6>Уровень Доступа</h6>
                            <Field className = "form-control" name = {'level'} component = {'select'}>
                                <option></option>
                                {level.map(l => <option value = {l}> {l} </option>)}
                            </Field>

                            <p>	&nbsp;</p>
                            {props.editorBtn ? <button className = "btn btn-primary  btn-block" aria-describedby="basic-addon1"> Изменить </button>:
                                               <button className = "btn btn-primary  btn-block" aria-describedby="basic-addon1"> Добавить </button>}
                        </div>
                    </div>
                </form>
    )
}

const ToggleFooterReduxForm = reduxForm({ form: 'createStaff', enableReinitialize: true})(ToggleFooterForm);




const ToggleFooter = (props) => {

    

    const handleClick = () => {
        props.setToggleHeight(0);
    }

    const onSubmit = (formData) => {
        console.log(props.page);
        if (props.editorBtn) props.updateStaffThunk(props.initialValues.code, formData.full_name, formData.phone, formData.position, formData.email, formData.level, props.currentPage, props.page, props.order, props.signin)
        else props.createStaffThunk(formData.full_name, formData.phone, formData.position, formData.email, formData.level, props.currentPage, props.page, props.order,  props.signin); 
    }

    

    return (
        <div className = "fixed-bottom foter">  
            
            <AnimateHeight
                id='example-panel'
                duration={ 500 }
                height={ props.height }>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                    <div className = "d-flex justify-content-between p-2 top-foter">
                         {props.editorBtn ? <span className = "staf_text p-2"> Update </span>: <span className = "staf_text p-2"> Add new staff </span>}
                         <button className = 'btn app-toggle-close' onClick = { handleClick }> &times; </button>
                    </div>
                    <ToggleFooterReduxForm setToggleHeight = {props.setToggleHeight}
                                  setEditorBtn = {props.setEditorBtn}
                                  onSubmit = { onSubmit }

                                  initialValues = {props.initialValues}
                                  editorBtn = {props.editorBtn}
                                  height = {props.height}
                                  />  
                
            </AnimateHeight>
        </div>

    );
}

export default ToggleFooter;