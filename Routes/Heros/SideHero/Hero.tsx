import styles from "./Hero.module.css";

import React from "react";
import Link from "next/link";

const Hero = () => {
  const standoutText = "Beautiful React Templates for you.";
  const supportingText =
    "Our templates are easy to setup, understand and customize. Fully modular components with a variety of pages and components.";
  const bgImage: string = "/hero.jpg";

  return (
    <div className={styles.sideHero}>
      <div className="wrapper">
        <div className={styles.layoutBox}>
          <div className={styles.layoutBox_left}>
            <h1 className={styles.standoutText}>{standoutText}</h1>
            <h2 className={styles.supportingText}>{supportingText}</h2>
            <div className={styles.linkBox}>
              <div className={styles.link + " " + styles.link__color}>
                <Link href="">
                  <a> Link 1</a>
                </Link>
              </div>
              <div className={styles.link + " " + styles.link__default}>
                <Link href="">
                  <a> Link 2</a>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.layoutBox_right}>
            <div className={styles.bgImage}>
              <img
                src={bgImage}
                alt="This is the background image for the hero"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
