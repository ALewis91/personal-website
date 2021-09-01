import classes from "./ProjectSummary.module.css";
import { useHistory } from "react-router-dom";

const ProjectSummary = (props) => {
  const history = useHistory();

  const onImageClickedHandler = () => {
    if (props.link) {
      history.push(props.link);
    }
  };
  return (
    <div className={classes.project_summary}>
      <h3>{props.title}</h3>
      <h4>{props.description}</h4>
      <img
        onClick={onImageClickedHandler}
        src={props.image}
        alt="Project example"
      ></img>
    </div>
  );
};

export default ProjectSummary;
