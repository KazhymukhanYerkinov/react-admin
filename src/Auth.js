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


const useStyles = makeStyles((theme) => ({
    sidebar: {
      background: '#F5F7FA',
      height: '91vh',
      maxWidth: '80px',
    }
  }));

const Auth = (props) => {
    const classes = useStyles();
    
    return (
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <HeaderContainer />
          </Grid>

          <Grid item xs={3} sm={1} className = {classes.sidebar}>
          
          </Grid>

          <Grid item xs={9} sm={11} >
  
            <Navbar/>

            <Route path = '/staffs'
                  render = { () =>  <StaffContainer /> }/>
            <Route path = '/request'
                  render = { () => <RequestContainer />}/>
              
          </Grid>
        </Grid>
    )
}



export default compose(WithAuthRedirect ,connect(null, {}))(Auth);