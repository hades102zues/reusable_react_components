import React from "react";

//import PageFrame from "../Routes/UI/PageFrame/PageFrame";
import Header_LogoMedia from "../Routes/Headers/Header_LogoMedia/Header";
import Header_LogoMedia_Nav from "../Routes/Headers/Header_LogoMedia_Nav/Header";
import Header_Typical from "../Routes/Headers/Header_Typical/Header";

import BasicFooter from "../Routes/Footers/BasicFooter/Footer";
import ColsFooter from "../Routes/Footers/3ColFooter/Footer";

import MiniHero from "../Routes/Heros/MiniHero/MiniHero";
import LargeHero from "../Routes/Heros/LargeHero/Hero";
import SideHero from "../Routes/Heros/SideHero/Hero";

import PageFrame from "../Routes/PageFrame/PageFrame";

import AddBoxIcon from "@material-ui/icons/AddBox";
import StandardCard from "../Routes/Cards/StandardCard/Card";
import StandardCardBox from "../Routes/Cards/StandardCardBox/CardsBox";

const home = () => {
  return (
    <React.Fragment>
      {/* <Header_Typical />
      <Header_LogoMedia />
      <Header_LogoMedia_Nav /> */}

      {/* <BasicFooter />
      <ColsFooter /> */}
      {/* 
      <MiniHero headline="This is a Mini Hero!" heroImage="/hero.jpg">
        <Header_Typical />
      </MiniHero> */}

      {/* <LargeHero
        standoutText="The Championship is here"
        supportingText="Welcome to Company where your lorem ipsum and
      comfort is our priority. We go above and beyond to ensure good
      ispumm loermn disimoee in a comforting  forgeti primeno"
      >
        <Header_Typical />
      </LargeHero> */}
      {/* <SideHero /> */}
      {/* <PageFrame pageTitle="What you need" /> */}

      <div className="wrapper">
        <StandardCardBox>
          {["", "", "", "", "", ""].map((item, i) => (
            <StandardCard
              title="Secure Lound Happiness"
              description="Welcome to our React Creative Agency, React Portfolio and Corporate Multi-Purpose Template."
              icon={AddBoxIcon}
              iconColor="#e83e8c"
            />
          ))}
        </StandardCardBox>
      </div>
    </React.Fragment>
  );
};

export default home;
