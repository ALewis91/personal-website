import classes from "./Projects.module.css";
import SectionHeader from "../Header/SectionHeader/SectionHeader";
import underConstructionImg from "../../assets/img/under-construction.png";
const Projects = () => {
  return (
    <section id="section-projects">
      <div className={classes.projectsBox}>
        <SectionHeader title="Projects" subtitle="Coming soon!"></SectionHeader>
        <img
          className={classes.UnderCon}
          src={underConstructionImg}
          alt="Under Construction"
        ></img>
      </div>
    </section>
  );
};

export default Projects;
