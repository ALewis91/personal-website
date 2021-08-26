import classes from "./Button.module.css";

function Button(props) {
  return (
    <div className={classes.Button} onClick={props.onClick}>
      {props.children}
    </div>
  );
}

export default Button;
