import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';
import Signin from './Signin';



const SignContainer = (props) => {
    
    return <Signin login = { props.login }
                   isAuth = { props.isAuth } />
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth,
    }
}

export default connect(mapStateToProps, { login })(SignContainer)