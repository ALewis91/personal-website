import React, { Component } from "react";
import classes from "./Experience.module.css";
import Button from "../UI/Button/Button";
import SectionHeader from "../UI/SectionHeader/SectionHeader";
import ExperienceList from "./ExperienceList/ExperienceList";

class Experiences extends Component {
  fetchResume(resumeKey) {
    //Create API request url from object key
    const requestUrl = `${process.env.REACT_APP_API_URL}/s3-bucket-service/download/${resumeKey}`;

    //Send get request to API gateway service to fetch from bucket
    fetch(requestUrl)
      .then((response) => {
        // Send response to blob
        return response.blob();
      })
      .then((blob) => {
        //Create blob link to download document from
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute(
          "download",
          `${(this.props.resumeKey + "").split("-")[1]}`
        );

        //Add element to the dom
        document.body.appendChild(link);

        //Click link to download file
        link.click();

        //Remove link element from dom
        link.parentNode.removeChild(link);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error downloading resume");
      });
  }

  render() {
    let buttonStyle = {};
    if (this.props.resumeUrl === null) {
      buttonStyle = { display: "none" };
    }

    return (
      <section id="section-experience" className={classes.experienceSection}>
        <div className={classes.experienceBox}>
          <SectionHeader
            title="Experience"
            subtitle="A little about what I've done..."
          ></SectionHeader>
          <ExperienceList
            experiences={this.props.experiences}
          ></ExperienceList>
          <Button
            style={buttonStyle}
            onClick={() => this.fetchResume(this.props.resumeKey)}
          >
            Download Resum&eacute;
          </Button>
        </div>
      </section>
    );
  }
}

export default Experiences;
