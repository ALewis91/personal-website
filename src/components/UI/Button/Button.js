import classes from "./Button.module.css";

function Button(props) {
  return (
    <div
      className={
        props.classes ? classes.Button + " " + props.classes : classes.Button
      }
      onClick={props.onClick}
    >
      {props.children}
    </div>
  );
}

export default Button;
