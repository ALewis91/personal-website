import classes from "./ContactSource.module.css";

const ContactSource = (props) => {
  let content = "";
  if (props.isLink && props.link && props.children) {
    content = <a href={props.link} target='_blank' rel="noopener noreferrer">{props.children}</a>;
  } else {
      content = <p>{props.content}</p>
  }
  return (
    <div className={classes.contactSource}>
      <ion-icon name={props.iconName}></ion-icon>
      <h4>{props.title}</h4>
      {props.isJSX ? props.children : content}
    </div>
  );
};

export default ContactSource;
