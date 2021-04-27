import React from 'react';

import classes from './NavigationItem.module.css';
import Aux from '../../../../hoc/Aux/Aux';
import { Link, animateScroll as scroll } from "react-scroll";

const navigationItem = ( props ) => (
        <li className={classes.NavigationItem}>
            <Link
                activeClass={classes.Link}
                to={props.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}> 
                    <div className={classes.Link_title}>
                        {props.children}
                    </div>
            </Link>
        </li>
);

export default navigationItem;