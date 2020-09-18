import styles from "./Tale.module.css";

import React from "react";
import Link from "next/link";
const Tale = () => {
  const taleImg: string = "/lus.svg";
  return (
    <div className={styles.tale}>
      <article className={styles.tale_left}>
        <h5 className={styles.tale_value}>Our Track Record</h5>
        <h1 className={styles.tale_title}>We have the best service.</h1>
        <p className={styles.tale_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br />
          <br />
        </p>
        <div className={styles.tale_stats}>
          <div className={styles.stat_item}>
            <p className={styles.stat}>2228+</p>
            <p className={styles.stat_title}>Clients</p>
          </div>
          <div className={styles.stat_item}>
            <p className={styles.stat}>2228+</p>
            <p className={styles.stat_title}>Projects</p>
          </div>
          <div className={styles.stat_item}>
            <p className={styles.stat}>2228+</p>
            <p className={styles.stat_title}>Ceromonies</p>
          </div>
        </div>
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
      </article>
      <div className={styles.tale_right}>
        <div className={styles.tale_img}>
          <img src={taleImg} alt="This image tells a tale." />{" "}
        </div>
      </div>
    </div>
  );
};

export default Tale;
