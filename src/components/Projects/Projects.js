import classes from "./Projects.module.css";
import SectionHeader from "../Header/SectionHeader/SectionHeader";
import ProjectSummary from "./Project/ProjectSummary/ProjectSummary";
import puzzleImage from "../../assets/img/8-puzzle-board.png";
import websiteLogo from "../../assets/img/logo-dark.ico";
import underConstructionImage from "../../assets/img/under-construction.png";

const Projects = (props) => {
  return (
    <section id="section-projects" className={classes.projects_section}>
      <div className={classes.projects_box}>
        <SectionHeader
          title="Projects"
          subtitle="Some of the things I've been working on!"
        ></SectionHeader>
        <div className={classes.projects_summaries}>
          <ProjectSummary
            title="Personal Website"
            description="Built using React, Spring Boot, SQL."
            image={websiteLogo}
            link={"/"}
          />
          <ProjectSummary
            title="8-Puzzle Solver"
            description="A* search using two different heuristics"
            image={puzzleImage}
            link={"/projects/8-puzzle-solver"}
          />
        </div>
        <img
          className={classes.under_construction}
          src={underConstructionImage}
          alt="Under Construction"
        />
      </div>
    </section>
  );
};

export default Projects;
