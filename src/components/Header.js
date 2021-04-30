import React, { Component } from 'react';

import { Link } from "react-scroll";
import classes from './Header.module.css';

class Header extends Component {
    
    render() {
        return(
                <section id="section-home">
                    <header className={classes.Header}>
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
                                    <li>
                                        <a href="https://join.skype.com/invite/iJKIHwcRAdX9">
                                            <ion-icon className={classes.large_icon} name="logo-skype"></ion-icon></a>
                                    </li>
                                </ul>
                            </div>                    
                            <div className={`${classes.row} ${classes.bottom_nav_button}`}>
                                <Link
                                    activeClass="active"
                                    to="section-about"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}>
                                        <ion-icon 
                                        className={classes.large_icon} 
                                        name="caret-down-circle"></ion-icon>               
                                </Link>
                            </div>    
                        </div>
                    </header>    
                </section>
        );
    }
}

export default Header;