import styles from "./Header.module.css";

import React from "react";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import Link from "next/link";

interface Props {
  drawerHandler: () => void;
}

const Header: React.FC<Props> = (props) => {
  const navList: String[] = [
    "Home",
    "About",
    "Services",
    "Blog",
    "Appointment",
    "Contact",
  ];

  return (
    <header className={styles.navBgColor}>
      <div className={"wrapper"}>
        <div className={styles.divider}>
          <nav className={styles.navbarDesktop}>
            {navList.map((text: string, i: number) => {
              const path =
                text.toLowerCase() !== "home" ? `/${text.toLowerCase()}` : "/";
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
    </header>
  );
};

export default Header;
