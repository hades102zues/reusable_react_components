import styles from "./CardsBox.module.css";

import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[]; // compatible with cards based off of the standard card component
}

const CardBox: React.FC<Props> = (props) => {
  const { children } = props;

  return <div className={styles.box}>{children}</div>;
};

export default CardBox;
