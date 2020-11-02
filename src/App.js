import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Auth from './Auth';
import SignContainer from './components/Signin/SignContainer';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';

import Layout from './hoc/Layout';
import { initalizeApp } from './redux/app-reducer';
import SignUpContainer from './components/SignUp/SignUpContainer';





class App extends React.Component {
  componentDidMount() {
    this.props.initalizeApp();
  }

  

  render() {
    if (!this.props.initialized) {
      return <div> </div>
    }

    return (
      <Layout>
        <Route exact path = '/login'
          render = { () =>  <SignContainer /> }/>
        <Route exact path = '/register' 
          render = { () => <SignUpContainer /> } />
        <Route exact path = '/forgot'
          render = { () => <ForgotPassword /> } />
        <Auth />
      </Layout>
    )
  }
}

const mapStateToProps = (state) => ({ initialized: state.appPage.initialized })


export default connect(mapStateToProps, { initalizeApp })(App);

