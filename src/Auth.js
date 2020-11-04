import React from 'react';
import Grid from '@material-ui/core/Grid';
import StaffContainer from './components/Staff/StaffContainer';
import { compose } from 'redux';
import { Route } from 'react-router-dom';
import { WithAuthRedirect } from './hoc/WithAuthRedirect';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import HeaderContainer from './components/Header/HeaderContainer';
import RequestContainer from './components/Request/RequestContainer';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Project/Project';




const Auth = () => {
    
    return (
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <HeaderContainer />
          </Grid>

          

          <Grid item xs={12} sm={12} className = 'pl-4 pr-4'>
  
            <Navbar/>

            <Route path = '/staffs'
                  render = { () =>  <StaffContainer /> }/>
            <Route path = '/request'
                  render = { () => <RequestContainer />}/>
            <Route path = '/project'
                  render = { () => <Project /> } />
              
          </Grid>
        </Grid>
    )
}



export default compose(WithAuthRedirect ,connect(null, {}))(Auth);