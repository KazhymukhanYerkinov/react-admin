import React from 'react';
import { connect } from 'react-redux';
import { signup, setIsOpen} from '../../redux/auth-reducer';
import SignUp from './SignUp';


const SignUpContainer = (props) => {
    return <SignUp isAuth = {props.isAuth}
                    signup = {props.signup}
                    isOpen = { props.isOpen }
                    setIsOpen = { props.setIsOpen } />

}
let mapStateToProps = (state) => ({
    isAuth: state.authPage.isAuth,
    isOpen: state.authPage.isOpen,
})

export default connect(mapStateToProps, { signup , setIsOpen})(SignUpContainer);