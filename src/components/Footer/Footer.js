import classes from "./Footer.module.css";
import { Link } from "react-scroll";
import preval from 'preval.macro';

const Footer = () => {
  const today = preval`module.exports = new Date().toLocaleString();`

  return (
    <div className={classes.footer}>
      <div className={classes.topNavButton}>
        <Link
          activeClass="active"
          to="section-home"
          spy={true}
          smooth={true}
          duration={500}
        >
          <ion-icon
            className={classes.large_icon}
            name="caret-up-circle"
          ></ion-icon>
        </Link>
      </div>
      <div className={classes.creditsBox}>
        <p>Designed and created by Aaron Lewis</p>
        <p>Last updated {today}</p>
      </div>
    </div>
  );
};

export default Footer;
