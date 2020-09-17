import styles from "./Header.module.css";

import React from "react";
import Link from "next/link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core/styles";

const headerLine = () => {
  const fb_url = ""; //client's facebook page
  const instagram_url = ""; //client's instagram page
  const companyLogo = "/metro_logo.png"; //path in public folder to the company's logo
  const companyLogoAlt = " This is <company name>'s logo";

  const iconStyles = makeStyles({
    root: {
      marginRight: 20,
      fontSize: 22,
    },
  });

  const iconClasses = iconStyles();

  return (
    <header className={styles.header0}>
      <div className="wrapper" style={{ overflow: "visible" }}>
        <div className={styles.socialAdj}>
          <p className={styles.socialText}>Follow us on: </p>
          <a target="_blank" rel="noopener noreferrer" href={fb_url}>
            <FacebookIcon classes={{ root: iconClasses.root }} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={instagram_url}>
            <InstagramIcon classes={{ root: iconClasses.root }} />
          </a>

          <div className={styles.companyLogo}>
            <div className={styles.colorBox}>
              <Link href="/">
                <a>
                  <img src={companyLogo} alt={companyLogoAlt} />
                </a>
              </Link>

              {/* <h3 className={styles.company}>Metropolitan Medical</h3> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default headerLine;
