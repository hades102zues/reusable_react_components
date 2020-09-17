import styles from "./Header.module.css";

import React from "react";
import Link from "next/link";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";

interface Props {
  drawerHandler: () => void;
}

const Header: React.FC<Props> = (props) => {
  const companyLogo = "/metro_logo.png"; //path in public folder to the company's logo
  const companyLogoAlt = " This is <company name>'s logo";
  const companyName = ""; //if the name is long then you probably dont want it as text;

  const navList: String[] = [
    "Home",
    "About",
    "Services",
    "Blog",
    "Appointment",
    "Contact",
  ];

  return (
    <header className={styles.header}>
      <div className="wrapper">
        <div className={styles.header_space}>
          <div className={styles.logo_space}>
            <div className={styles.logo_box}>
              <Link href="/">
                <a>
                  <img src={companyLogo} alt={companyLogoAlt} />
                </a>
              </Link>
            </div>
            {companyName.length ? (
              <h3 className={styles.companyName}>{companyName}</h3>
            ) : null}
          </div>

          <div className={styles.nav_space}>
            <nav className={styles.navbarDesktop}>
              {navList.map((text: string, i: number) => {
                const path =
                  text.toLowerCase() !== "home"
                    ? `/${text.toLowerCase()}`
                    : "/";
                return (
                  <Link href={path} key={text}>
                    <a className={styles.linkText}>{text}</a>
                  </Link>
                );
              })}
            </nav>
            <nav className={styles.navbarMobile}>
              <MenuRoundedIcon
                fontSize="large"
                onClick={(): void => {
                  props.drawerHandler();
                }}
              />
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
