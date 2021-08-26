import ExperienceItem from "../ExperienceItem/ExperienceItem";
import classes from "./ExperienceList.module.css";

const ExperienceList = (props) => {
  let experienceList = [];

  if (props.experiences) {
    for (const exp of props.experiences) {
      experienceList.push(
        <ExperienceItem key={exp.id} experience={exp}></ExperienceItem>
      );
    }
  }
  return <ul className={classes.experience_list}>{experienceList}</ul>;
};

export default ExperienceList;
