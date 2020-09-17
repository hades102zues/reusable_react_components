import React from "react";
import styles from "./MiniHero.module.css";

interface Props {
  children: JSX.Element; //This will be the header components
  headline: string; //the text that will be shown in the hero
  heroImage: string; //path to the image within public to be displayed in the hero
  // drawerHandler: () => void;
}
const MiniHero: React.FC<Props> = ({ children, headline, heroImage }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_bgImage}>
        <img src={heroImage} alt="The background image of the hero" />
      </div>
      <div className={styles.hero_tint}></div>
      {children}
      <section className={styles.showcase}>
        <h1 className={styles.showcase_headline}>{headline}</h1>
      </section>
    </div>
  );
};

export default MiniHero;
