import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const styles = {
    root: {
        flexGrow: 1,
        backgroundColor: 'inhert',
    },
    tabs: {
        
        backgroundColor: '#D42D11',
        
    },
    textColors: {
        color: '#D42D11',
    },
    tabses: {
        padding: 20,
    }
}

const TabsChoose = (props) => {
    const [state, setState] = useState(0);

    const handleChange = (event, value) => {                
        setState(value);
    }
    const { classes } = props;

    return (
        <Paper className = {classes.root}
               elevation={0}>
            <Tabs 
                value = {state}
                onChange = { handleChange }
                className = {classes.textColors}
                centered
                classes = {{
                    indicator: classes.tabs
                }}>

                <Tab label = "Администрация"
                     className = {classes.tabses}/>
            </Tabs>
        </Paper>
    );

}

export default withStyles(styles)(TabsChoose);