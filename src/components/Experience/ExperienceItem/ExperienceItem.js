import classes from './ExperienceItem.module.css';
import { Component } from 'react';

class Experience extends Component {
    render() {

        let categoryClasses = [];
        categoryClasses.push(classes.Category);
        if (this.props.category === "work") {
            categoryClasses.push(classes.Work)
        }

        return(
            <li className={classes.Experience}>
                <ul>
                    <li className={classes.Category}>{this.props.experience.category}</li>
                    <li>{this.props.experience.location}</li>
                    <li>{this.props.experience.title}</li>
                    <li>{this.props.experience.description}</li>
                    <li>{this.props.experience.startDate}</li>
                    <li>{this.props.experience.endDate}</li>
                </ul>
            </li>
        )
    };
}

export default Experience;