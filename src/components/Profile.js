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
      contactInfo: null
    }
  }

  componentDidMount() {
    let url = `ec2-184-72-108-243.compute-1.amazonaws.com:8080/contact/search/findByCreatorId?creatorId=${this.props.id}`;
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

  render() {
    return (
      <Aux>
        <Waypoint
          onEnter={this.stickyNavToggleOff}
          onLeave={this.stickyNavToggleOn}
          topOffset={51}
        >
          <div>
            <Header 
              links={this.state.links} 
              contactInfo={this.state.contactInfo}></Header>
            <Navbar
              links={this.state.links}
              sticky={this.state.stickyNav}
              hidden={!this.state.stickyNav}
            ></Navbar>
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
