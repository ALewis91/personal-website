import React, { Component } from "react";

import { Link } from "react-scroll";
import classes from "./Header.module.css";

class Header extends Component {
  render() {
    let socialMediaLinks = [];
    if (this.props.profileInfo) {
      if (this.props.profileInfo.gitHubUrl) {
        socialMediaLinks.push(
          <li key="github">
            <a
              href={this.props.profileInfo.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        );
      }
      if (this.props.profileInfo.linkedInUrl) {
        socialMediaLinks.push(
          <li key="linkedin">
            <a
              href={this.props.profileInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        );
      }
      if (this.props.profileInfo.email) {
        socialMediaLinks.push(
          <li key="email">
            <a href={`mailto:${this.props.profileInfo.email}`}>
              <ion-icon className={classes.large_icon} name="mail"></ion-icon>
            </a>
          </li>
        );
      }
      if (this.props.profileInfo.skypeUrl) {
        socialMediaLinks.push(
          <li key="skype">
            <a href={this.props.profileInfo.skypeUrl}
            target="_blank"
            rel="noopener noreferrer">
              <ion-icon className={classes.large_icon} name="logo-skype"></ion-icon>
            </a>
          </li>
        );
      }
    }

    return (
      <section id="section-home">
        <header className={classes.Header}>
          <div className={classes.Home_box}>
            <div className={classes.row}>
              <h1>
                {this.props.profileInfo
                  ? `${this.props.profileInfo.firstName} ${this.props.profileInfo.lastName}`
                  : "Aaron Lewis"}
              </h1>
              <h3>Aspiring Full-Stack Developer</h3>
            </div>
            <div className={classes.row}>
              <ul className={classes.Social}>
                {socialMediaLinks}
              </ul>
            </div>
          </div>

          <div className={classes.bottom_nav_button}>
            <Link
              activeClass="active"
              to="section-about"
              spy={true}
              smooth={true}
              duration={500}
            >
              <ion-icon
                className={classes.large_icon}
                name="caret-down-circle"
              ></ion-icon>
            </Link>
          </div>
        </header>
      </section>
    );
  }
}

export default Header;
