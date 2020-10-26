import React from 'react';
import Header from './components/Header/Header';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import NavbarContainer from './components/Navbar/NavbarContainer';
import StaffContainer from './components/Staff/StaffContainer';
import { Route } from 'react-router-dom';
import LocationContainer from './components/Location/LocationContainer';




const useStyles = makeStyles((theme) => ({
  sidebar: {
    background: '#F5F7FA',
    height: '91vh',
    maxWidth: '80px',
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={3} sm={1} className = {classes.sidebar}>
        
      </Grid>

      <Grid item xs={9} sm={11} >
 
          <NavbarContainer/>
            <Route exact path = '/location'
                  render = { () => <LocationContainer /> }/>

            <Route exact path = '/'
                  render = { () =>  <StaffContainer /> }/>
         
        
      </Grid>
    </Grid>
  );
}
export default App;

