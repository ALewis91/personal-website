import React, { Component } from 'react';

import Navbar from '../Navigation/Navbar/Navbar';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem';
import classes from './Header.module.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            links: [
                'home', 
                'about', 
                'resume',
                'projects',
                'contact'
            ]
        }
    }

    render() {
    const navItems = this.state.links.map(el => (
        <NavigationItem key={el} link={el}>{el}</NavigationItem>
    ))

        return (
            <header className={classes.Header}>
                <Navbar navItems={navItems}>
                </Navbar>
                <div className={classes.Home_box}>
                    <div className={classes.row}>
                        <h1>Aaron Lewis</h1>
                        <h2>Aspiring Full-Stack Software Developer</h2>
                        <h3>Background Image: Valdez-Cordova, Alaska by Nikomi Fong</h3>
                    </div>
                    <hr style={{backgroundColor: "#4afdf5"}} className={`${classes.row} ${classes.divider}`} />
                    <div className={classes.row}>
                        <ul className={classes.Social}>
                            <li>
                                <a href="https://github.com/Alewis91" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-github"></ion-icon></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/alewis91/" target="_blank" rel="noopener noreferrer"><ion-icon name="logo-linkedin"></ion-icon></a>
                            </li>
                            <li>
                                <a href="mailto:aaron.lewis.swe@gmail.com">
                                    <ion-icon className={classes.large_icon} name="mail"></ion-icon></a>
                            </li>
                        </ul>
                    </div>                    
                    <div className={`${classes.row} ${classes.bottom_nav_button}`}>
                        <ion-icon size="64px" className={classes.large_icon} name="caret-down-circle"></ion-icon>
                    </div>    
                </div>
            </header>
        );
    }
}

export default Header;