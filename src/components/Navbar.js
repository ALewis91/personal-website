import React, {Component} from 'react';

import { Link } from "react-scroll";
import classes from './Navbar.module.css';

// import logo from '../../../assets/img/logo.png';


class Navbar extends Component {
    render() {
        let links = this.props.links.map((el, index) => (
            <li 
            className={classes.navItem}
            key={index}>
                <Link
                    activeClass="active"
                    to={el.target}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}>
                        {el.text}
                </Link>
        </li>
        ));
        return (
            <div>
                <nav>
                {/* <img src={logo} alt="Logo" className={classes.logo}></img> */}
                    <ul className={classes.navItems}>
                        {links}
                    </ul>
                </nav>
            </div>

        );
    }
}


export default Navbar;