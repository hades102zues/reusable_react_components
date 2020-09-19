import styles from "./Statement.module.css";

import React from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import { makeStyles } from "@material-ui/core/styles";

const Statement = () => {
  const imgSrc: string = "/hero.jpg";

  const description: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua.`;
  const person: string = " Charlotte Hale";
  const companyName: string = " Bravod Corp.";

  const useStyles = makeStyles({
    root: {
      fontSize: 70,
      color: "#1976d2",
      position: "absolute",
      top: 0,
      transform: "translateY(-50%)",
    },
  });
  const classes = useStyles();

  return (
    <div className={styles.statement}>
      <img src={imgSrc} alt="This is the image presented in this statement." />
      <div className={styles.statement_holder}>
        <FormatQuoteIcon className={classes.root} />
        <p className={styles.statement_text}>{description}</p>
        <p className={styles.name}> {person}</p>
        <p className={styles.company}>{companyName}</p>
      </div>
      <div className={styles.statement_bgEffect}></div>
    </div>
  );
};

export default Statement;
