import React, { Component } from "react";

import { Link } from "react-scroll";
import classes from "./Navbar.module.css";
import logo from "../../../assets/img/logo-dark.png";

// import logo from '../../../assets/img/logo.png';

class Navbar extends Component {
  render() {
    let links = this.props.links.map((el, index) => (
      <li className={classes.navItem} key={index}>
        <Link
          activeClass={classes.active}
          to={el.target}
          spy={true}
          smooth={true}
          duration={500}
          onClick={this.props.toggleSideDrawer}
        >
          {el.text}
        </Link>
      </li>
    ));
    return (
      <div className={this.props.sticky ? `${classes.sticky}` : classes.Navbar}>
        <div className={classes.hamburgerIcon}>
          {/* <button onClick={this.props.toggleSideDrawer} >HIt me</button> */}
          <ion-icon
            onClick={this.props.toggleSideDrawer}
            className={classes.hamburgerIcon}
            name="menu"
          ></ion-icon>
        </div>
        <div className={classes.navbar_name}>
          <h3>Aaron Lewis</h3>
        </div>
        <img className={classes.logo} src={logo} alt="logo"></img>
        <div>
          <nav>
            <ul className={classes.standardNav + " " + classes.navItems}>
              {links}
            </ul>
            <div
              className={
                this.props.sideDrawerOpen ? classes.sideDrawer : classes.hidden
              }
            >
              <ul className={classes.navItems}>{links}</ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navbar;
