import React, { useState } from "react";
import Nav from "./Nav";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Reviews from "./Reviews";

// Model off of tinyfrog.com

const Home = () => {
  return (
    <div>
      <Nav />
      <Section1 />
      <Section2 />
      <Section4 />
      <Section3 />
      <Reviews />
      <Section5 />

      {/* Short About Section */}
      {/* Blog */}
      {/* <Carousel /> */}
      <Section6 />
      <Section7 />
    </div>
  );
};

export default Home;
