import React, { Component } from "react";

import Aux from "../hoc/Aux/Aux";
import Navbar from "./Navbar";
import Header from "./Header";
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Resume from './Resume';
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
        // {
        //   target: "section-resume",
        //   text: "resume",
        // },
        // {
        //   target: "section-projects",
        //   text: "projects",
        // },
        {
          target: "section-contact",
          text: "contact",
        },
      ],
      stickyNav: false,
      contactInfo: null,
      sideDrawerOpen: false,
    }
    this.toggleSideDrawer = this.toggleSideDrawer.bind(this);
  }

  componentDidMount() {
    let url = `${process.env.REACT_APP_API_URL}/contact/search/findByCreatorId?creatorId=${this.props.id}`;
    fetch(url)
    .then(response => {
        return response.json();
      }).then(data => {
        this.setState((prevState, props) => {
          const newContactInfo = data;
          console.log("Contact info is loaded");
          return { contactInfo: newContactInfo };
        });
      }).catch(err => {
        console.log(err);
        console.log("Error fetching contact data");
      })
  }

  stickyNavToggleOn = () => {
    this.setState((prevState, props) => {
      const newStickyNavState = true;
      return { stickyNav: newStickyNavState };
    });
  };

  stickyNavToggleOff = () => {
    this.setState((prevState, props) => {
      const newStickyNavState = false;
      return { stickyNav: newStickyNavState };
    });
  };

  toggleSideDrawer() {
    this.setState((prevState, props) => {
      const newSideDrawerState = !prevState.sideDrawerOpen;
      return { sideDrawerOpen: newSideDrawerState };
    });
  };

  render() {
    return (
      <Aux>
        <Waypoint
          onLeave={this.stickyNavToggleOn}
          onEnter={this.stickyNavToggleOff}
          topOffset={51}
        >
          <div>
          <Navbar
              links={this.state.links}
              sticky={this.state.stickyNav}
              sideDrawerOpen={this.state.sideDrawerOpen}
              toggleSideDrawer={this.toggleSideDrawer.bind(this)}
              ></Navbar>
            <Header 
              links={this.state.links} 
              contactInfo={this.state.contactInfo}></Header>
          </div>
        </Waypoint>
        <About></About>
        <Resume></Resume>
        <Projects></Projects>
        <Contact contactInfo={this.state.contactInfo}></Contact>
      </Aux>
    );
  }
}

export default Profile;
