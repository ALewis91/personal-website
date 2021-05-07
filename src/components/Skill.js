import classes from "./Skill.module.css";
import React from "react";

const Skill = (props) => {
  let proficiencyBlocks = [];
  for (var i = 0; i < props.value && i < 10; i++) {
    proficiencyBlocks.push(<div className={classes.skillBlock}></div>);
  }
  for (var i = props.value; i < 10; i++) {
      proficiencyBlocks.push(<div className={classes.skillBlockEmpty}></div>)
  }
  return (
    <div className={classes.skillBox}>
      <p>{props.name}</p>
      <div className={classes.proficiencyBox}>{proficiencyBlocks}</div>
    </div>
  );
};

export default Skill;
