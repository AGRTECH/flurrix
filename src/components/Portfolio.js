import React from "react";
import Section1Portfolio from "./Section1Portfolio";
import Section2Portfolio from "./Section2Portfolio";
import Section2Pricing from "./Section2Pricing";
import Section3Pricing from "./Section3Pricing";
import Section4Pricing from "./Section4Pricing";
import Section3 from "./Section3";
import FAQ3 from "./FAQ3";
import Nav from "./Nav";
import Reviews from "./Reviews";
import Section6 from "./Section6";
import Section7 from "./Section7";
import bg from "../img/pricingbg.jpg";

const Portfolio = () => {
  return (
    <>
      <Nav />
      <Section1Portfolio />
      <Section2Portfolio />
      <Section3Pricing />
      <Reviews />
      <Section3 />
      <FAQ3 />
      <Section6 />
      <Section7 />
    </>
  );
};

export default Portfolio;
