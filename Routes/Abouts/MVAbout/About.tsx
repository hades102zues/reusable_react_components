import React from "react";
import styles from "./About.module.css";

import { withStyles } from "@material-ui/core";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import PeopleIcon from "@material-ui/icons/People";

const sectionImage = "/hero.jpg";

const About = () => {
  const missionColor = "#00695C"; //green
  const peopleColor = "#0277BD"; //blue

  const StylMissionIcon = withStyles({
    root: {
      fontSize: 35,
      color: peopleColor,
      marginRight: 10,
    },
  })(LocalHospitalIcon);

  const StylePeopleIcon = withStyles({
    root: {
      fontSize: 40,
      color: missionColor,
      marginRight: 10,
    },
  })(PeopleIcon);

  return (
    <section className={styles.about} style={{ backgroundColor: peopleColor }}>
      <div className={styles.aboutImage}>
        <img src={sectionImage} />
      </div>

      <div className="wrapper">
        <div className={styles.aboutFlex}>
          <div
            className={styles.about2}
            style={{ backgroundColor: peopleColor }}
          >
            <div className={styles.adjust}>
              <StylePeopleIcon />
              <h3 className={styles.aboutTitle}>Who We Are</h3>
            </div>
            <div className={styles.aboutTalk}>
              <p className={styles.talk}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit
              </p>
              <p className={styles.talk}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit
              </p>
            </div>
          </div>
          <div className={styles.about3} style={{ background: missionColor }}>
            <div className={styles.mission}>
              <StylMissionIcon />
              <h3 className={styles.mission_title}>Mission</h3>

              <p className={styles.mission_statement}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
