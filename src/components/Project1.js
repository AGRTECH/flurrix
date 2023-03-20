import React from "react";
import Section1Project1 from "./Section1Project1";
import Section2Project1 from "./Section2Project1";
import Section2Portfolio from "./Section2Portfolio";
import Section2Pricing from "./Section2Pricing";
import Section3Project1 from "./Section3Project1";
import Section4Pricing from "./Section4Pricing";
import Section3 from "./Section3";
import FAQ3 from "./FAQ3";
import Nav from "./Nav";
import Section6 from "./Section6";
import Section7 from "./Section7";
import bg from "../img/pricingbg.jpg";

const Project1 = () => {
  return (
    <>
      <Nav />
      <Section1Project1 />
      <Section2Project1 />
      <Section3Project1 />
      <Section3 />
      <FAQ3 />
      <Section6 />
      <Section7 />
    </>
  );
};

export default Project1;
