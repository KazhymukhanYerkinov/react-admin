import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Tabs from './TabsChoose/TabsChoose';


const styles = {
    root: {
        flexGrow: 1,
        
        
    },
    textLogin: {
        marginRight: 12,   
        fontFamily: 'SF UI Display',   
    },
    name: {
        fontSize: 15,
        color: '#003360',
        
    },
    role: {
        fontSize: 12,
        float: 'right',
        color: '#8AA1C1',
    }
    
}
const Header = (props) => {
    
    if (!props.user) {
        return <div></div>
    }
   
    const { classes } = props;
    return (
        <div >
            <AppBar position = 'sticky'
                    color = 'white'
                    className = {classes.root}>
                <Toolbar variant = "dense">
                    <Tabs />
                    
                    <div className = {classes.textLogin}>
                        <span className = {classes.name}> {props.user.full_name}</span> <br/>
                        
                        <span className = {classes.role}> {props.user.level} </span>
                    </div>

                    
                    <Avatar alt = "Role Role" />
                </Toolbar>                          
            </AppBar>

            
        </div>
    )

}

export default withStyles(styles)(Header);