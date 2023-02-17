import React from "react";
import Section1Pricing from "./Section1Pricing";
import Section2Pricing from "./Section2Pricing";
import Nav from "./Nav";
import Section6 from "./Section6";
import Section7 from "./Section7";
import bg from "../img/pricingbg.jpg";

const Pricing = () => {
  return (
    <>
      <Nav />
      <Section1Pricing />
      <Section2Pricing />
      <Section6 />
      <Section7 />
    </>
  );
};

export default Pricing;
