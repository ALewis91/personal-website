import React, { Component } from "react";

import { Link } from "react-scroll";
import classes from "./Header.module.css";

class Header extends Component {
  render() {
    let socialMediaLinks = [];
    if (this.props.contactInfo) {
      if (this.props.contactInfo.gitHubUrl) {
        socialMediaLinks.push(
          <li key="github">
            <a
              href={this.props.contactInfo.gitHubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </li>
        );
      }
      if (this.props.contactInfo.linkedInUrl) {
        socialMediaLinks.push(
          <li key="linkedin">
            <a
              href={this.props.contactInfo.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>
        );
      }
      if (this.props.contactInfo.email) {
        socialMediaLinks.push(
          <li key="email">
            <a href={`mailto:${this.props.contactInfo.email}`}>
              <ion-icon className={classes.large_icon} name="mail"></ion-icon>
            </a>
          </li>
        );
      }
      if (this.props.contactInfo.skypeUrl) {
        socialMediaLinks.push(
          <li key="skype">
            <a href={this.props.contactInfo.skypeUrl}>
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
                {this.props.contactInfo
                  ? `${this.props.contactInfo.firstName} ${this.props.contactInfo.lastName}`
                  : "FirstName LastName"}
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
