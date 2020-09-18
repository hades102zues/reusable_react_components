//Import your choice for each item type and use them as precribed
import Hero from "../Heros/MiniHero/MiniHero";
import Header from "../Headers/Header_Typical/Header";
import Footer from "../Footers/3ColFooter/Footer";
import Drawer from "../Drawers/SideDrawer/Drawer";

import React, { useState } from "react";

interface Props {
  children?: JSX.Element[] | JSX.Element; //Refers to the other body items
  pageTitle?: string; //Some heros ask for a title
}

const PageFrame: React.FC<Props> = (props) => {
  const { pageTitle, children } = props;

  //The following is used to provide opening and closing functionality for drawers
  const [drawerState, setDrawerState] = useState(false);
  const drawerOpener = (): void => {
    setDrawerState((prevDrawerState): any => !prevDrawerState);
  };

  return (
    <>
      <Hero headline={pageTitle} heroImage="/hero.jpg">
        <Header drawerHandler={drawerOpener} />
      </Hero>

      {/* <Header drawerHandler={drawerOpener} />
      <Hero /> */}

      {children ? children : null}
      <Footer />
      <Drawer shouldOpen={drawerState} drawerStateHandler={drawerOpener} />
    </>
  );
};

export default PageFrame;
