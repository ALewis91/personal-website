import React, { Component } from "react";

import classes from "./About.module.css";
import selfie from "../assets/img/aaron-selfie__dark_square.png";
import Skill from "./Skill";

class About extends Component {
  render() {
    return (
      <section id="section-about" className={classes.aboutSection}>
        <div className={classes.aboutBox}>
          <div className={classes.aboutHeader}>
            <h3>About</h3>
            <p>Let me introduce myself!</p>
          </div>
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
              of frontend technologies and frameworks.{" "}
            </p>
          </div>
          <div className={classes.box_2_col + ' ' + classes.highlightsBox}>
            <div className={classes.row_1_span_2}>
            <h3 className={classes.subHeader}>Profile</h3>
            <p className={classes.small_ghost_p}>
Currently seeking a full-time software engineering position in Raleigh, NC but open to other remote opportunities. If you think I'm a good fit, feel free to reach me via <a href="mailto:aaron.lewis.swe@gmail.com">email</a>.</p>

            <h3 className={classes.ghost_h3}>
                Full Name
            </h3>
            <p className={classes.small_ghost_p}>Aaron Lewis</p>
            <h3 className={classes.ghost_h3}>
                Birthdate
            </h3>
            <p className={classes.small_ghost_p}>July 24th, 1991</p>
            <h3 className={classes.ghost_h3}>
                Email
            </h3>
            <p className={classes.small_ghost_p}>contact@aaronlewis.dev</p>
            </div>
            <div className={classes.row_1_span_2}>
              <div className={classes.skillsBox}>
                <h3 className={classes.subHeader}>Skills</h3>
                <p className={classes.small_ghost_p}>
I'm a hard-working, independent professional who enjoys leveraging programming to solve everyday problems. I consider myself a Java programmer but I am also very familiar with C++. Below are some highlights:</p>
                <Skill name="Java" value={8}></Skill>
                <Skill name="C++" value={7}></Skill>
                <Skill name="React" value={5}></Skill>
                <Skill name="Angular" value={4}></Skill>
                <Skill name="Node/Express" value={5}></Skill>
                <Skill name="Javascript/CSS/HTML" value={5}></Skill>
                <Skill name="NoSql/Sql" value={3}></Skill>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
