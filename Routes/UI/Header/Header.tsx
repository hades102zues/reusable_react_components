import styles from "./Header.module.css";
import Link from "next/link";

// import { withStyles } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

const companyLogo = "/metro_logo.png";

import { makeStyles } from "@material-ui/core/styles";

interface Props {
  drawerHandler: () => void;
}
const Header: React.FC<Props> = (props) => {
  // const iconSize = "large";

  // const StyledFaceBookIcon = withStyles({
  //   root: {
  //     marginRight: 20,
  //     fontSize: 20,
  //   },
  // })(FacebookIcon);

  const fb_url = "";
  const instagram_url = "";
  const navList = [
    "Home",
    "About",
    "Services",
    "Blog",
    "Appointment",
    "Contact",
  ];

  const iconStyles = makeStyles({
    root: {
      marginRight: 20,
      fontSize: 22,
    },
  });

  const iconClasses = iconStyles();

  return (
    <header className={styles.hero_header}>
      {/*The first line with the icons and company logo */}
      <div className={styles.header0}>
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
                    <img
                      src={companyLogo}
                      alt="The metropolitan medical's logo"
                    />
                  </a>
                </Link>

                {/* <h3 className={styles.company}>Metropolitan Medical</h3> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*The second line with the nav buttons and hamburger */}
      <div className={styles.navBgColor}>
        <div className={"wrapper"}>
          <div className={styles.header1}>
            <div className={styles.divider2}>
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
      </div>
    </header>
  );
};

export default Header;
