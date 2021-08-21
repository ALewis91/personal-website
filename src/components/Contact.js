import { Component } from "react";

import classes from "./Contact.module.css";
import SectionHeader from "./SectionHeader";
import ContactSource from "./ContactSource";
import Footer from "./Footer";

class Contact extends Component {
  render() {
    let locationBuffer = [];
    let contactSources = [];

    //Build the address JSX based on the provided address information
    if (this.props.profileInfo) {
      if (this.props.profileInfo.street) {
        locationBuffer.push(
          <div key={this.props.profileInfo.street}>
            {this.props.profileInfo.street} <br></br>
          </div>
        );
      }
      if (this.props.profileInfo.city && this.props.profileInfo.state) {
        locationBuffer.push(
          <div key={this.props.profileInfo.city + this.props.profileInfo.state}>
            {this.props.profileInfo.city + ", " + this.props.profileInfo.state}{" "}
            <br></br>
          </div>
        );
      } else if (this.props.profileInfo.city) {
        locationBuffer.push(
          <div key={this.props.profileInfo.city}>
            {this.props.profileInfo.city} <br></br>
          </div>
        );
      } else {
        locationBuffer.push(
          <div key={this.props.profileInfo.state}>
            {this.props.profileInfo.state} <br></br>
          </div>
        );
      }
      if (this.props.profileInfo.zipcode) {
        locationBuffer.push(
          <div key={this.props.profileInfo.zipcode}>
            {this.props.profileInfo.zipcode}
          </div>
        );
      }
    }

    //If the user provided their email, linkedin, or phone number
    //create a contact source with that info
    if (this.props.profileInfo) {
      if (this.props.profileInfo.email) {
        contactSources.push(
          <ContactSource
            key="mail"
            iconName="mail"
            title="email"
            isLink={true}
            link={`mailto:${this.props.profileInfo.email}`}
          >
            {this.props.profileInfo.email}
          </ContactSource>
        );
      }

      if (this.props.profileInfo.linkedInUrl) {
        contactSources.push(
          <ContactSource
            key="linkedin"
            iconName="logo-linkedin"
            title="Let's connect"
            isLink={true}
            link={this.props.profileInfo.linkedInUrl}
          >
            {this.props.profileInfo.linkedInUrl.substring(12,this.props.profileInfo.linkedInUrl.length - 1)}
          </ContactSource>
        );
      }

      if (this.props.profileInfo.phone) {
        contactSources.push(
          <ContactSource
            key="phone"
            iconName="call"
            title="Leave a message"
            isLink={true}
            link={`tel:${this.props.profileInfo.phone}`}
          >
            {this.props.profileInfo.phone}
          </ContactSource>
        );
      }

      //If the user provided some address info, create a contact source with that info
    if (locationBuffer.length > 0) {
      contactSources.push(
        <ContactSource 
        key="location"
        iconName="navigate-circle" title="location" isJSX={true}>
          {locationBuffer}
        </ContactSource>
      );
    }
    }

    return (
      <section id="section-contact" className={classes.contactSection}>
        <div className={classes.contactBox}>
          <div className={classes.contactHeaderBox}>
            <SectionHeader
              title="Contact"
              subtitle="I'd love to connect with you!"
            ></SectionHeader>
            <p>Let me get to know more about you.</p>
          </div>
          <div className={classes.contactSourcesBox}>
            {contactSources}
          </div>
        </div>
        <div className={classes.FooterBox}>
          <Footer></Footer>
        </div>
      </section>
    );
  }
}

export default Contact;
