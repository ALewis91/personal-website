import React from 'react';

import classes from './Navbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';
// import logo from '../../../assets/img/logo.png';


const navbar = ( props ) => {
    return (
        <nav className={classes.Navbar}>
            {/* <img src={logo} alt="Logo" className={classes.logo}></img> */}
            <NavigationItems 
            styling={classes.NavigationItems}
            navItems={props.navItems}/>
        </nav>
    );
}


export default navbar;