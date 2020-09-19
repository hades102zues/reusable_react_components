import styles from "./Accordions.module.css";

import React from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//Note that the accordion list fully assumes the width of the parent container
const AccordionE = () => {
  interface Accordian {
    heading: string;
    details: string;
  }

  //controls what accordian is expanded. Provided straight from material ui
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      accordianStyle: {
        color: "red",
        boxShadow: "none",
        border: "0px",
      },
      expanded: {
        border: "1px solid #ccc",
      },
      heading: {
        color: "purple",
        fontWeight: 400,
      },
      details: {
        color: "#333",
      },
    })
  );
  const classes = useStyles();

  //the Items  for the accordians
  const accordionConfigs: Accordian[] = [
    {
      // panel: "panel1",
      heading: "Is lunch provided free of cost?",
      details: `Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.`,
    },
    {
      heading: "Do you have 2 Bedroom suites?",
      details: `Here are some frequently asked questions about our hotels from our loving customers. Should you have any other questions, feel free to reach out via the contact form below.`,
    },
    {
      heading: "How many licks to the end bro!",
      details: `Only 900 99 thousand something and the quarter stuff blagh.`,
    },
  ];

  const accordionItems: JSX.Element[] = accordionConfigs.map(
    (config: Accordian, i: number): JSX.Element => {
      const number: string = i.toString();

      return (
        <Accordion
          //you can comment out the next two lines to allow multiple accoridians open at a time
          expanded={expanded === "panel" + number}
          onChange={handleChange("panel" + number)}
          key={i}
          classes={{ root: classes.accordianStyle, expanded: classes.expanded }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={"panel" + number + "bh-content"}
            id={"panel" + number + "bh-header"}
          >
            <h3 className={classes.heading}>{config.heading}</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p className={classes.details}>{config.details}</p>
          </AccordionDetails>
        </Accordion>
      );
    }
  );

  return <div className={styles.accordian}>{accordionItems}</div>;
};

export default AccordionE;
