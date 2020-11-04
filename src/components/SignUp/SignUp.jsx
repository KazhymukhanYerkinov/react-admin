import React from "react";
import { NavLink, Redirect} from "react-router-dom";
import { Field, reduxForm } from 'redux-form';


import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { useStyles } from "../Signin/SigninModule";
import { FormControlEmail, FormControlPassword } from "../../common/FormControl/FormControl";
import { emailRequired, maxLengthCreator, phoneRequired, required } from "../../validators/validator";




const maxLength10 = maxLengthCreator(40);

const SignUpForm = (props) => {

    
    const cls = useStyles();
    return (
        <form onSubmit = {props.handleSubmit}>

            <div className={classNames(cls.logo, `text-xs-center pb-xs`)}>
                <Typography variant = "h6">
                    CLAY GROUP
                </Typography>
                <Typography variant="caption">
                    Create an app id to continue.
                </Typography>
                {props.error && <Typography variant = "caption" className = {cls.errorMessage}>
                    {props.error}
                </Typography>}
                
            </div>

                                
            <Field 
                name = {'email'}
                label = "Email"
                component = { FormControlEmail }
                validate = { [emailRequired, maxLength10 ] } />
            <Field
                name = {'full_name'}
                label = "Username"
                component = { FormControlEmail }
                validate = { [required, maxLength10] } />
            <Field 
                name = {'phone'}
                label = "Phone"
                component = { FormControlEmail }
                validate = { [phoneRequired, required] }
            />
            <Field
                name = {'password'}
                label = "Password"
                component = { FormControlPassword }
                validate = { [required, maxLength10] }
                />
            <Field
                name = {'re_password'}
                label = "Confirm Password"
                component = { FormControlPassword }
                validate = {[ required, maxLength10]}
            />
            <Button
                className = "mt-3"
                variant="contained"
                color="primary"
                type="submit"
                fullWidth>
                Create your account
            </Button>

            <div className="pt-3 d-flex justify-content-center">

                <NavLink to={'/forgot'} className = "pr-5">
                    <Typography>Forgot password?</Typography>
                </NavLink>


                <NavLink to={'/login'}>
                    <Typography>Access your account.</Typography>
                </NavLink>
            </div>
        </form>

    );
}

const SignUpReduxForm = reduxForm({ form: "signup"})(SignUpForm);



const SuccessSignUp = (props) => {

    const cls = useStyles();

    const handleClick = () => {
        props.setIsOpen(false)
    }

    return (<div className={classNames(cls.logo, `text-xs-center pb-xs`)}>
        <Typography variant = "h6">
            CLAY GROUP
        </Typography>

        <Typography variant="body1">
            Welcome to Kazhymukhan's admin
        </Typography>  

        <Typography variant = "body1">
            <NavLink to = {'/login'} onClick = { handleClick }> Login page </NavLink>
        </Typography>   
    </div>)
}

const SignUp = (props) => {
    const cls = useStyles();
    console.log(props.isOpen)
    if (props.isAuth) {
        return <Redirect to = '/' />
    }

    

    const onSubmit = (formData) => {
        props.signup(formData.email, formData.full_name, formData.phone, formData.password, formData.re_password)
    }

    return (
        <>
            <div className = {classNames(cls.session, cls.background)}>
                <div className = {cls.content}>
                    <div className = {cls.wrapper}>
                        <Card>
                            <CardContent>
                                {!props.isOpen ?<SignUpReduxForm onSubmit = { onSubmit }/> : <SuccessSignUp setIsOpen = {props.setIsOpen} />}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div> 
        </>

    )
}





export default SignUp;