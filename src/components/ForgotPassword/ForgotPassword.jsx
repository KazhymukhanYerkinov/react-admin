import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { NavLink } from "react-router-dom";
import React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { useStyles } from "../Signin/SigninModule";


const ForgotPassword = () => {
    const cls = useStyles();
    return (
        <div className = {classNames(cls.session, cls.background)}>
            <div className = {cls.content}>
                <div className = {cls.wrapper}>
                    <Card>
                        <CardContent>
                            <form>
                                <div className = {classNames(cls.logo, `text-xs-center pb-xs`)}>
                                    <Typography variant = "h6">
                                        CLAY GROUP
                                    </Typography>
                                    <Typography variant="caption">
                                        Enter your email and we'll send you instructions on how to
                                        reset your password.
                                    </Typography>
                                </div>
                                
                                <TextField 
                                    id="email"
                                    label="Email address"
                                    className={cls.textField}
                                    fullWidth
                                    margin="normal"
                                />

                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    className="mt-1">
                                        Send password reset
                                </Button>

                                <div className="pt-3 d-flex justify-content-center">
                                    <NavLink to="/login" className = "mr-5">
                                        <Typography>Sign</Typography>
                                    </NavLink>
                                   
                                    <NavLink to="/register" className = "ml-5">
                                        <Typography>Create new account.</Typography>
                                    </NavLink>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;