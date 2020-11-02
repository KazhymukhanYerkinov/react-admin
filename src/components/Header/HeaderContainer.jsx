import React from 'react';
import { connect } from 'react-redux';
import Header from './Header';



const HeaderContainer = (props) => {
    return <Header user = {props.user} />
}

let mapStateToProps = (state) => ({
    user: state.authPage.user,
})
export default connect(mapStateToProps, {})(HeaderContainer);