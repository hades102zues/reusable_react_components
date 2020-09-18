import styles from "./Card.module.css";

import React from "react";
import { styled } from "@material-ui/core/styles";

interface Props {
  title: string;
  description: string;
  icon: any;
  iconColor: string;

  cardColor?: string;
}

const ServiceCard: React.FC<Props> = (props) => {
  const { title, description, icon, iconColor, cardColor } = props;

  const RenderedIcon: any = styled(icon)({
    fontSize: 40,
    color: iconColor,
  });
  return (
    <article
      className={styles.card}
      style={{
        backgroundColor: cardColor ? cardColor : "none",
        color: cardColor ? "white" : null,
      }}
    >
      <div className={styles.iconBox}>
        <RenderedIcon />
      </div>

      <h3 className={styles.card_title}>{title} </h3>
      <p className={styles.card_description}> {description}</p>
    </article>
  );
};

export default ServiceCard;
