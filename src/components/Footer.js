import classes from "./Footer.module.css";
import { Link } from "react-scroll";

const Footer = () => {
  var today = new Date();
  var day = String(today.getDate()).padStart(2, "0");
  var month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var year = today.getFullYear();
  var hour = today.getHours();
  var minute = today.getMinutes();

  today = month + "/" + day + "/" + year + " " + hour + ":" + minute;
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
