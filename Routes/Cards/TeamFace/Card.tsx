import styles from "./Card.module.css";

import React from "react";

interface Props {
  title: string;
  description: string;
  pic: string;

  cardColor?: string;
}

const ServiceCard: React.FC<Props> = (props) => {
  const { title, description, pic, cardColor } = props;

  return (
    <article
      className={styles.card}
      style={{
        backgroundColor: cardColor ? cardColor : "none",
        color: cardColor ? "white" : null,
      }}
    >
      <div className={styles.picBox}>
        <img src={pic} alt="This is a picture of a team member." />
      </div>

      <h3 className={styles.card_title}>{title} </h3>
      <p className={styles.card_description}> {description}</p>
    </article>
  );
};

export default ServiceCard;
