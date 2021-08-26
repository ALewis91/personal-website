import { Component } from "react";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import classes from "./ExperienceList.module.css";

class ExperienceList extends Component {
  render() {
    let experienceList = [];
    if (this.props.experiences) {
      const parent = this.props.experiences;
      for (const exp of parent.experiences) {
        experienceList.push(
          <ExperienceItem key={exp.id} experience={exp}></ExperienceItem>
        );
      }
    }
    return <ul className={classes.experienceList}>{experienceList}</ul>;
  }
}

export default ExperienceList;
