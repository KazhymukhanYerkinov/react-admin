import React from 'react';
import cls from './FormControl.module.css';
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";



const FormControl = ({meta, children}) => {
    const hasError  = meta.touched && meta.error;
    return (
        <div className = {cls.formControl + " " + (hasError ? cls.error: "")}>
            <div>
                { children }
            </div>

            {hasError && <span className = { cls.metaError }> {meta.error} </span>}
        </div>
    )
}
export const FormSelectControl = ({input, meta, children}) => {
    const hasError = meta.touched && meta.error;

    return (
        <div className = {cls.formControl + " " + (hasError ? cls.error: "")}>
            <div>
                <select {...input} >
                    { children }            
                </select>
            </div>

            {hasError && <span className = { cls.metaError }> {meta.error} </span>}
        </div>
    );
}

export const FormControlEmail = ({ label, input, meta: { touched, invalid, error } }) => {
    return (
        <>
        <TextField 
            label = { label }
            placeholder = { label }
            error = { touched && invalid }
            helperText={touched && error}
            margin="normal"
            fullWidth
            {...input}/>
        </>   
    )
}
export const FormControlPassword = ({ label, input, meta: { touched, invalid, error } }) => {
    return (
        <>
        <TextField 
            label = { label }
            type = "password"
            placeholder = { label }
            error = { touched && invalid }
            helperText={touched && error}
            margin="normal"
            fullWidth
            {...input}/>
        </>   
    )
}

export const FormControlCheckBox = ({ input, label }) => {
    return (
        <FormControlLabel
            control={<Checkbox value="checkedA" />}
            label= { label } 
            className = {cls.fullWidth}
            { ...input }/>
    )
}





export const Input = (props) => {

    const { input, meta, child, ...restProps } = props;
    return <FormControl {...props}>      <input {...input} {...restProps} />    </FormControl>
}
