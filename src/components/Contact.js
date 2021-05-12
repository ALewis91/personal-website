import classes from "./Contact.module.css";
import SectionHeader from "./SectionHeader";
import ContactSource from "./ContactSource";
import Footer from "./Footer";

const Contact = () => {
  let location = (
    <p>
      13844 DogwoodAve<br></br>Chino, CA<br></br>91710
    </p>
  );
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
          <ContactSource
            iconName="navigate-circle"
            title="location"
            isJSX={true}
          >
            {location}
          </ContactSource>
          <ContactSource
            iconName="mail"
            title="email"
            isLink={true}
            link={"mailto:contact@aaronlewis.dev"}
          >
            {"contact@aaronlewis.dev"}
          </ContactSource>
          <ContactSource
            iconName="logo-linkedin"
            title="Let's connect"
            isLink={true}
            link={"https://www.linkedin.com/in/alewis91/"}
          >
            {"linkedin.com/in/alewis91"}
          </ContactSource>
          <ContactSource
            iconName="call"
            title="Leave a message"
            isLink={true}
            link={"tel:909-287-6659"}
          >
            {"(909) 287-6659"}
          </ContactSource>
        </div>
      </div>
      <div className={classes.FooterBox}>
        <Footer></Footer>
      </div>
    </section>
  );
};

export default Contact;
