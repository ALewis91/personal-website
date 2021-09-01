import classes from "./Project.module.css";
import ProjectHeader from "./ProjectHeader/ProjectHeader";

const Project = (props) => {
  return (
    <div className={classes.project}>
      <ProjectHeader
        title={props.title}
        description={props.description}
      ></ProjectHeader>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default Project;
