import React, { Component } from "react";

import Aux from "../../hoc/Aux/Aux";
import Navbar from "../UI/Navbar/Navbar";
import Header from "../Header/Header";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
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
      profileInfo: null,
      skills: null,
      sideDrawerOpen: false,
      resumeKey: null,
      resumeUrl: null
      }
    this.toggleSideDrawer = this.toggleSideDrawer.bind(this);
  }

  componentDidMount() {
    if (this.props.userId !== null) {
      this.fetchProfile();
      this.fetchSkills();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.userId !== prevProps.userId) {
      this.fetchSkills();
      this.fetchProfile();
    }
  }

  fetchProfile() {
    let profileApiUrl = `${process.env.REACT_APP_API_URL}/profile-service/user/${this.props.userId}`;
    fetch(profileApiUrl)
    .then(response => {
        return response.json();
      }).then(data => {
        this.setState((prevState, props) => {
          const fetchedProfile = data;
          console.log("Profile info was fetched");
          return { profileInfo: fetchedProfile, 
            resumeKey: `${fetchedProfile.creatorId}-${fetchedProfile.firstName}${fetchedProfile.lastName}ResumePDF.pdf` }
        });
      }).catch(err => {
        console.log(err);
        console.log("Error fetching user profile");
      });
  }

  fetchSkills() {
    let skillApiUrl = `${process.env.REACT_APP_API_URL}/skills-service/user/${this.props.userId}`;
    fetch(skillApiUrl)
    .then(response => {
        return response.json();
      }).then(data => {
        this.setState((prevState, props) => {
          const fetchedSkills = data;
          console.log("Skill info was fetched");
          return { skills: fetchedSkills };
        });
      }).catch(err => {
        console.log(err);
        console.log("Error fetching user skills");
      });
  }
  
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
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
              profileInfo={this.state.profileInfo}></Header>
          </div>
        </Waypoint>
        <About
          skills={this.state.skills}
          ></About>
        <Resume 
          resumeKey={this.state.resumeKey}>
          </Resume>
        <Projects></Projects>
        <Contact profileInfo={this.state.profileInfo}></Contact>
      </Aux>
    );
  }
}

export default Profile;
