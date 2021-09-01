import classes from "./ProjectHeader.module.css";
import Button from "../../../UI/Button/Button";
import { useHistory } from "react-router-dom";

const ProjectHeader = (props) => {
  const history = useHistory();

  const backButtonHandler = () => {
    history.push("/");
  };

  return (
    <div className={classes.project_header}>
      <Button classes={classes.back_button} onClick={backButtonHandler}>
        Back To Projects
      </Button>
      <h1 className={classes.project_title}>{props.title}</h1>
      <h4 className={classes.project_description}>{props.description}</h4>
    </div>
  );
};

export default ProjectHeader;
