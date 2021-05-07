import React, { Component } from "react";

import Aux from "../hoc/Aux/Aux";
import Navbar from "./Navbar";
import Header from "./Header";
import About from './About';
import { Waypoint } from "react-waypoint";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          target: "section-home",
          text: "home",
        },
        {
          target: "section-about",
          text: "about",
        },
        {
          target: "section-resume",
          text: "resume",
        },
        {
          target: "section-projects",
          text: "projects",
        },
        {
          target: "section-contact",
          text: "contact",
        },
      ],
      stickyNav: false,
    };
  }

  stickyNavToggleOn = () => {
    this.setState((prevState, props) => {
      const newStickyNavState = true;
      console.log("Sticky nav is on");
      return { stickyNav: newStickyNavState };
    });
  };

  stickyNavToggleOff = () => {
    this.setState((prevState, props) => {
      const newStickyNavState = false;
      console.log("Sticky nav is off");
      return { stickyNav: newStickyNavState };
    });
  };

  render() {
    return (
      <Aux>
        <Waypoint
          onEnter={this.stickyNavToggleOff}
          onLeave={this.stickyNavToggleOn}
          topOffset={51}
        >
          <div>
            <Header links={this.state.links}></Header>
            <Navbar
              links={this.state.links}
              sticky={this.state.stickyNav}
              hidden={!this.state.stickyNav}
            ></Navbar>
          </div>
        </Waypoint>

        <About></About>
        <section style={{height: '100vh'}}id="section-resume">Resume</section>
        <section id="section-projects">Projects</section>
        <section id="section-contact">Contact</section>
      </Aux>
    );
  }
}

export default Profile;
