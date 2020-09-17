import React from "react";

import PageFrame from "../Routes/UI/PageFrame/PageFrame";
import Header_LogoMedia from "../Routes/Header_LogoMedia/Header";
import Header_LogoMedia_Nav from "../Routes/Header_LogoMedia_Nav/Header";
import Header_Typical from "../Routes/Header_Typical/Header";

const home = () => {
  const navList = [
    "Home",
    "About",
    "Services",
    "Blog",
    "Appointment",
    "Contact",
  ];

  return (
    <React.Fragment>
      {/* <PageFrame pageTitle="Page Title">
        <div>Hi</div>
      </PageFrame> */}
      <Header_Typical />
      <React.Fragment>
        <Header_LogoMedia />
        <Header_LogoMedia_Nav />
      </React.Fragment>
    </React.Fragment>
  );
};

export default home;
