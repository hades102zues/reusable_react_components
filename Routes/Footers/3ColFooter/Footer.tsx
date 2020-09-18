import styles from "./Footer.module.css";

import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer: React.FC = () => {
  const companyLogo: string = "/metro_logo.png"; //path in public folder to the company's logo
  const companyLogoAlt: string = " This is <company name>'s logo";
  const companyLocation: JSX.Element = (
    <p className={styles.info_box__details}>
      Lot 39 Rendezvous Ridge, <br />
      Christ Church, Barbados.
    </p>
  );
  const companyOpeningHours: JSX.Element = (
    <p className={styles.info_box__details}>
      Opening Hours: <br />
      Monday to Friday 8am to 5pm.{" "}
    </p>
  );

  const companyCopyRight: JSX.Element = (
    <p className={styles.copy_text}>
      &copy; 2020, Company Name. All rights reserved. <br />
    </p>
  );

  const fb_url = "https://www.facebook.com/c.bowenmedical/";
  const instagram_url = "https://www.instagram.com/metropolitanmedicalbb/";

  const iconStyles = makeStyles({
    root: {
      marginRight: 20,
      fontSize: 32,
    },
  });

  const iconClasses = iconStyles();

  const navList: String[] = [
    "Home",
    "About",
    "Services",
    "Blog",
    "Appointment",
    "Contact",
  ];

  const navLinks: JSX.Element[] = navList.map(
    (text: string, i: number): JSX.Element => {
      const path =
        text.toLowerCase() !== "home" ? `/${text.toLowerCase()}` : "/";
      return (
        <div key={text}>
          <Link href={path}>
            <a className={styles.linkText}>{text}</a>
          </Link>
        </div>
      );
    }
  );

  return (
    <footer className={styles.footer}>
      <div className="wrapper">
        <div className={styles.info_space}>
          <div className={styles.company_space}>
            <div className={styles.company_box}>
              <div className={styles.company_footer_img_box}>
                <img
                  src={companyLogo}
                  alt={companyLogoAlt}
                  className={styles.company_footer_logo}
                />
              </div>
            </div>
          </div>

          <div className={styles.link_space}>
            <div className={styles.link_box}>
              <p className={styles.footer_heading}>Useful Links</p>
            </div>
          </div>

          <div className={styles.media_space}>
            <div className={styles.media_box}>
              <p className={styles.footer_heading}>Social Links</p>
            </div>
          </div>
        </div>

        <div className={styles.something_info_space}>
          <div className={styles.business_info_space}>
            <div className={styles.business_info_box}>
              <div className={styles.info_box}>
                {companyLocation}
                {companyOpeningHours}
              </div>
            </div>
          </div>
          <div className={styles.nav_link_space}>
            <div className={styles.footer_nav_link_box}>{navLinks}</div>
          </div>
          <div className={styles.social_link_space}>
            <div className={styles.social_link_box}>
              {fb_url.length ? (
                <div>
                  <a target="_blank" rel="noopener noreferrer" href={fb_url}>
                    <FacebookIcon classes={{ root: iconClasses.root }} />
                  </a>
                </div>
              ) : null}

              {instagram_url.length ? (
                <div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={instagram_url}
                  >
                    <InstagramIcon classes={{ root: iconClasses.root }} />
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className={styles.copyright_space}>{companyCopyRight}</div>
      </div>
    </footer>
  );
};

export default Footer;
