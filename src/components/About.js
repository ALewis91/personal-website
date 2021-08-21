import React, { Component } from "react";

import classes from "./About.module.css";
import selfie from "../assets/img/aaron-selfie__dark_square.png";
import Skill from "./Skill";
import SectionHeader from "./SectionHeader";

class About extends Component {
  render() {
    let skillsList = [];
    if (this.props.skills) {
      const parent = this.props.skills;
      for (const skill of parent.skills) {
        skillsList.push(
          <Skill 
          key={skill.id}
          id={skill.id}
          name={skill.skillName} 
          value={skill.value}></Skill>
        )}

    }

    return (
      <section id="section-about" className={classes.aboutSection}>
        <div className={classes.aboutBox}>
          <SectionHeader
            title="About"
            subtitle="Let me introduce myself!"
          ></SectionHeader>
          <div className={classes.introBox}>
            <img
              className={classes.selfie}
              src={selfie}
              alt="A selfie of Aaron"
            />
            <p className={classes.small_ghost_p}>
              I'm an Air Force veteran and recent graduate from California
              Polytechnic State University, Pomona with a B.S. in Computer
              Science. My primary interests are in full-stack development and
              Cloud Ops. My main focus recently has been improving my knowledge
              of frontend technologies and frameworks.
            </p>
          </div>
          <div className={classes.box_2_col + " " + classes.highlightsBox}>
            <div className={classes.row_1_span_2}>
              <h3 className={classes.subHeader}>Profile</h3>
              <p className={classes.small_ghost_p + " " + classes.spacer}>
                Currently seeking a full-time software engineering position in
                Raleigh, NC but open to other remote opportunities. If you think
                I'm a good fit, feel free to reach me via{" "}
                <a href="mailto:aaron.lewis.swe@gmail.com">email</a>.
              </p>
              <div className={classes.summaryDemographics}>
                <h3 className={classes.ghost_h3}>Full Name</h3>
                <p className={classes.small_ghost_p}>Aaron Lewis</p>
                <h3 className={classes.ghost_h3}>Birthdate</h3>
                <p className={classes.small_ghost_p}>July 24th, 1991</p>
                <h3 className={classes.ghost_h3}>Email</h3>
                <p className={classes.small_ghost_p}>contact@aaronlewis.dev</p>
              </div>
            </div>
            <div className={classes.row_1_span_2}>
              <div className={classes.skillsBox}>
                <h3 className={classes.subHeader}>Skills</h3>
                <p className={classes.small_ghost_p}>
                  I'm a hard-working, independent professional who enjoys
                  leveraging programming to solve everyday problems. I consider
                  myself a Java programmer but I am also very familiar with C++.
                  Below are some highlights:
                </p>
                <div className={classes.skillBox}>
                  {skillsList}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
