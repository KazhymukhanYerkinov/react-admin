import React from 'react';
import classNames from "classnames";
import { Field, reduxForm } from 'redux-form';

//////// MATERIAL UI //////////////////
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavLink, Redirect } from 'react-router-dom';
import { useStyles } from './SigninModule';
import { FormControlCheckBox, FormControlEmail, FormControlPassword } from '../../common/FormControl/FormControl';
import { emailRequired, maxLengthCreator, required } from '../../validators/validator';


const maxLength10 = maxLengthCreator(40);

const SigninForm = (props) => {
    const cls = useStyles();
    return (   
        <form onSubmit = {props.handleSubmit}>

            <div className = {classNames(cls.logo, `text-xs-center pb-xs`)}>
                <Typography variant = "h6">
                    CLAY GROUP
                </Typography>

                <Typography variant = "caption">
                    Sign in with your app id to continue.
                </Typography>

                {props.error && <Typography variant = "caption" className = {cls.errorMessage}>
                    {props.error}
                </Typography>}


            </div>

            <Field 
                name = {'email'}
                label = "Email" 
                component = {FormControlEmail} 
                validate = { [emailRequired, maxLength10]} />


            <Field
                name = {'password'}
                label = "Password"
                component = {FormControlPassword}
                validate = { [required, maxLength10] } 
            />

           <Field 
                name = {'rememberMe'}
                label = "Remember me"
                component = { FormControlCheckBox } 
                />


            <Button
                variant="contained"
                color="primary"
                fullWidth
                type="submit">
                    Login
            </Button>

            <div className="pt-3 d-flex justify-content-center">
                <NavLink to = "/forgot" className = "mr-5">
                    <Typography>Forgot password?</Typography>
                </NavLink>
                
                <div> </div> 
                <NavLink to = "/register">
                    <Typography>Create new account. </Typography>
                </NavLink>
            </div>   
        </form>
    )
}

const SigninReduxForm = reduxForm({ form: "signin" })(SigninForm);

const Signin = (props) => {
    const cls = useStyles();

    const onSubmit = (formData) => {
       props.login(formData.email, formData.password)
    }
    
    if (props.isAuth) {
        return <Redirect to = '/staffs' />
    }

    return (
        <div className = {classNames(cls.session, cls.background)}>
            <div className = {cls.content}>
                <div className = {cls.wrapper}>
                    <Card>
                        <CardContent>
                            <SigninReduxForm onSubmit = { onSubmit }/>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
        
    )
}


export default Signin;