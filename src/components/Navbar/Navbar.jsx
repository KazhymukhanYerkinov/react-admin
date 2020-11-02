import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import './NavbarModule.css';



const useStyles = makeStyles((theme) => ({
    navlink: {
      marginLeft:7,
      marginRight:7,
      fontFamily: 'SFUIDisplay',
      fontSize: '11px',
      color: '#8AA1C1',
      
    },
    links:{
        margin: 15
    },
    span:{
        color: '#8AA1C1', 
    },

    // иконка и текст администрация 
    bottom_admin:{
        marginTop:20,
        marginLeft: 15,
        width:'100%'
    },
    admin_text:{
        marginLeft:20,
        lineHeight: '28px',
        fontFamily:'SFUIDisplay',
        fontSize:'24px',
        color:'#003360',
           
    }

    
  }));


const Navbar = () => {

    
    
    const styles = useStyles();
    return(
        <div className = {styles.links}>
            

            <div className = {styles.bottom_admin}>
                <Box display="flex" >
                    <Box flexGrow={1}>
                        {/* ICON SVG */}
                        <span>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32" height="32" rx="4" fill="#D42D11"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.008 20H21.3333C21.702 20 22 19.7014 22 19.3334V10.6667C22 9.93137 21.402 9.33337 20.6667 9.33337H12C11.196 9.33337 10 9.86604 10 11.3334V13.3334V17.3334V19.3334V20.6667C10 22.134 11.196 22.6667 12 22.6667H22V21.3334H12.008C11.7 21.3254 11.3333 21.2034 11.3333 20.6667C11.3333 20.13 11.7 20.008 12.008 20ZM11.3333 13.3334V11.3334C11.3333 10.7967 11.7 10.6747 12 10.6667H20.6667V18.6667H11.3333V17.3334V13.3334ZM19.3333 12H13.3333V13.3334H19.3333V12Z" fill="white"/>
                            </svg>

                        </span>
                        {/* ADMIN TEXT */}
                        
                        <span className = {styles.admin_text}>Администрация</span>

                    
                    </Box>
                    
                    
                </Box>
                    
            </div>

            <div className = "mt-3 ml-3 w-100  bottom-nav">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <NavLink className="nav-link" to = {'/staffs'}>Сотрудники</NavLink>
                    </li>
                    <li className="nav-item ml-3">
                        <NavLink className="nav-link " to = {'/request'}> Запросы </NavLink>
                    </li>
                    <li className="nav-item ml-3">
                        <NavLink className="nav-link" to = {'/filial'}>Филиалы</NavLink>
                    </li>

                    <li className="nav-item ml-3">
                        <NavLink className="nav-link" to = {'/card'}>Карточка</NavLink>
                    </li>
                </ul>

            </div>
           
        </div>
    );
}

export default Navbar;