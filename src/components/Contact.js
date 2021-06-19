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
    if (this.props.contactInfo) {
      if (this.props.contactInfo.street) {
        locationBuffer.push(
          <div key={this.props.contactInfo.street}>
            {this.props.contactInfo.street} <br></br>
          </div>
        );
      }
      if (this.props.contactInfo.city && this.props.contactInfo.state) {
        locationBuffer.push(
          <div key={this.props.contactInfo.city + this.props.contactInfo.state}>
            {this.props.contactInfo.city + ", " + this.props.contactInfo.state}{" "}
            <br></br>
          </div>
        );
      } else if (this.props.contactInfo.city) {
        locationBuffer.push(
          <div key={this.props.contactInfo.city}>
            {this.props.contactInfo.city} <br></br>
          </div>
        );
      } else {
        locationBuffer.push(
          <div key={this.props.contactInfo.state}>
            {this.props.contactInfo.state} <br></br>
          </div>
        );
      }
      if (this.props.contactInfo.zipcode) {
        locationBuffer.push(
          <div key={this.props.contactInfo.zipcode}>
            {this.props.contactInfo.zipcode}
          </div>
        );
      }
    }

    //If the user provided their email, linkedin, or phone number
    //create a contact source with that info
    if (this.props.contactInfo) {
      if (this.props.contactInfo.email) {
        contactSources.push(
          <ContactSource
            key="mail"
            iconName="mail"
            title="email"
            isLink={true}
            link={`mailto:${this.props.contactInfo.email}`}
          >
            {this.props.contactInfo.email}
          </ContactSource>
        );
      }

      if (this.props.contactInfo.linkedInUrl) {
        contactSources.push(
          <ContactSource
            key="linkedin"
            iconName="logo-linkedin"
            title="Let's connect"
            isLink={true}
            link={`https://${this.props.contactInfo.linkedInUrl}`}
          >
            {this.props.contactInfo.linkedInUrl}
          </ContactSource>
        );
      }

      if (this.props.contactInfo.phone) {
        contactSources.push(
          <ContactSource
            key="phone"
            iconName="call"
            title="Leave a message"
            isLink={true}
            link={`tel:${this.props.contactInfo.phone}`}
          >
            {this.props.contactInfo.phone}
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
