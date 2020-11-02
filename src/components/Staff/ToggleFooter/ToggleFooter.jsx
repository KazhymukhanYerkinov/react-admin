import React from 'react';
import './ToggleFooterModule.css';
import AnimateHeight from 'react-animate-height';
import { Field, reduxForm } from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { required, selectRequired } from '../../../validators/validator';
import { FormSelectControl, Input } from '../../../common/FormControl/FormControl';





const ToggleFooterForm = (props) => {



    const role = ['Backend-Developer', 'Frontend-Developer', 'Fullstack-Developer', 'Менеджер'];
    const level = ['Администратор', 'Супер Администратор', 'Пользователь'];

    

    const handleClick = () => {
        props.setToggleHeight(0); 
    }

    return (
        <>
            <div className = "d-flex justify-content-between p-2 top-foter">
                <div>
                    {props.editorBtn ? <span className = "staf_text p-2"> Изменить </span>: <span className = "staf_text p-2"> Добавить нового сотрудника </span>}
                </div>

                {props.error && <div className = 'app-toogle-div-error p-1'>
                    <span className = 'app-toggle-icon'>  <i class="fa fa-ban" aria-hidden="true"></i>  </span>
                    <span className = 'app-toggle-error'>  {props.error} </span>
                </div>}

                <div>
                    <button className = 'btn app-toggle-close' onClick = {  handleClick  }> &times; </button>
                </div>
            </div>
            <form onSubmit = { props.handleSubmit }> 
                    
                <div className = "row p-2 pl-5 pr-5">   
                    <div className = "col-md-3">
                        <h6>Ф.И.О</h6>
                        <Field type="text" component = {Input} className = "form-control" placeholder="Username" name = {'full_name'} validate = { required } /> 
                            
                        <h6 className = "mt-2">Телефон номера</h6>
                        <Field type="tel" component = {Input} className = "form-control" placeholder="8 777 456 23 23" name = {'phone'} validate = { required }/>
                    </div> 

                    <div className = "col-md-3">
                        <h6>Должность</h6>
                        <Field  className="form-control" name = {'position'} component = {FormSelectControl} validate = {selectRequired}>
                            <option value = ''></option>
                            {role.map(r => <option value = {r}> {r} </option>)}
                        </Field>

                        <h6 className = "mt-2">Электронный адрес</h6>
                        <Field type="email" component = {Input} className = 'form-control' name = {'email'} placeholder = "Электронный адрес" validate = { required } />
                    </div>

                    <div className = "col-md-3">
                        <h6>Уровень Доступа</h6>
                        <Field className = "form-control" name = {'level'} component = {FormSelectControl} validate = {selectRequired}>
                            <option></option>
                            {level.map(l => <option value = {l}> {l} </option>)}
                        </Field>

                        <h6 className = "mt-2"> Пароль </h6>
                        <Field type="text" component = {Input} className = 'form-control' name = {'password'} placeholder = "Пароль" validate = { required } />
            
                       
                        
                    </div>

                    <div className = "col-md-3 mt-4">
                        
                        {props.editorBtn ? <button className = "btn btn-primary  btn-block" aria-describedby="basic-addon1"> Изменить </button>:
                                                <button className = "btn btn-primary  btn-block" aria-describedby="basic-addon1"> Добавить </button>}
                    </div>
                </div>
            </form>
        </>
    )
}


const ToggleFooterReduxForm = reduxForm({ form: 'staff', enableReinitialize: true})(ToggleFooterForm);




const ToggleFooter =  (props) => {
    

    

    const onSubmit = (formData) => {
        
        toast.configure();
        if (props.editorBtn) props.updateStaffThunk(props.initialValues.code, formData.full_name, formData.phone, formData.position, formData.email, formData.level, formData.password, props.currentPage, props.page, props.order, props.signin);
        else {
            props.createStaffThunk(formData.full_name, formData.phone, formData.position, formData.email, formData.level, formData.password, props.currentPage, props.page, props.order,  props.signin);   
                   
        }   
    }


    return (
        <div className = "fixed-bottom foter">  
            
            <AnimateHeight
                id='example-panel'
                duration={ 500 }
                height={ props.height }>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                    
                    <ToggleFooterReduxForm setToggleHeight = {props.setToggleHeight}
                                  setEditorBtn = {props.setEditorBtn}
                                  setShowToggle = {props.setShowToggle}
                                  onSubmit = { onSubmit }

                                  initialValues = {props.initialValues}
                                  editorBtn = {props.editorBtn}
                                  height = {props.height}
                                  showToggle = {props.showToggle}
                                  />  
                
            </AnimateHeight>
        </div>

    );
}


const areEquals = (prevProps, nextProps) => {
    return prevProps.editorBtn === nextProps.editorBtn && prevProps.height === nextProps.height && prevProps.initialValues === nextProps.initialValues
}

export default React.memo(ToggleFooter, areEquals);