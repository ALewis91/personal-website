import classes from "./SectionHeader.module.css";

const SectionHeader = (props) => {
  return (
    <div className={classes.sectionHeader}>
      <h3>{props.title}</h3>
      <p>{props.subtitle}</p>
    </div>
  );
};

export default SectionHeader;
