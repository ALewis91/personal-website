import classes from "./ExperienceItem.module.css";
import { Component } from "react";

class ExperienceItem extends Component {
  convertDateToMonthYear(date) {
    let year = parseInt(date.split("-")[0]);
    console.log(year);
    let month = parseInt(date.split("-")[1]);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthNames[month - 1] + " " + year;
  }

  convertExperienceDescriptionToBullets(description) {
    const achievements = description.split("*");
    achievements.slice();
    let bullets = [];
    for (const achievement of achievements) {
      if (achievement.length > 0) {
        bullets.push(
          <div key={achievement} className={classes.Duty}>
            <li>
              <p>{achievement}</p>
            </li>
          </div>
        );
      }
    }
    return bullets;
  }

  render() {
    let experienceItem = null;
    if (this.props.experience) {
      console.log(this.props.experience);
      const convertedStartDate = this.convertDateToMonthYear(
        this.props.experience.startDate
      );
      const convertedEndDate = this.convertDateToMonthYear(
        this.props.experience.endDate
      );
      if (this.props.experience.category === "work") {
        experienceItem = (
          <li className={classes.ExperienceItem}>
            <ul className={classes.Experience}>
              <ion-icon name="briefcase-outline"></ion-icon>
              <div className={classes.ExperienceBody}>
                <div className={classes.ExperienceLocationDate}>
                  <h4>{this.props.experience.location}</h4>
                  <h5>{`${convertedStartDate} - ${convertedEndDate}`}</h5>
                </div>
                <li className={classes.subDetails}>
                  {this.props.experience.title}
                </li>
                <ul className={classes.subDetails}>
                  {this.convertExperienceDescriptionToBullets(
                    this.props.experience.description
                  )}
                </ul>
              </div>
            </ul>
          </li>
        );
      } else {
        experienceItem = (
          <li className={classes.ExperienceItem}>
            <ul className={classes.Experience}>
              <ion-icon name="book-outline"></ion-icon>
              <div className={classes.ExperienceBody}>
                <div className={classes.ExperienceLocationDate}>
                  <h4>{this.props.experience.location}</h4>
                  <h5>{`${convertedEndDate}`}</h5>
                </div>
                <li className={classes.subDetails}>
                  {this.props.experience.title}
                </li>
                <li className={classes.subDetails}>
                  {this.props.experience.description}
                </li>
              </div>
            </ul>
          </li>
        );
      }
    }

    return <div>{experienceItem}</div>;
  }
}

export default ExperienceItem;
