import React from "react";
import landscapingbg from "../img/pricingbg3.jpg";
import grass from "../img/cartoongrass.png";
import checkmark from "../img/checkicon.svg";

const Section1Pricing = () => {
  return (
    <>
      {" "}
      <div className="home-container">
        <p className="home-firstline">Low Prices</p>
        <p className="home-secondline">High Quality</p>
        <p className="pricing-subtitle"></p>
        <button className="home-button">Let's Chat</button>
        <button className="home-button2">Get a Site</button>
        <img src={landscapingbg} className="landing-bg" alt="" />
      </div>
      {/* <img src={grass} className="home-grass1" alt="" /> */}
      {/* <div className="grass"></div> */}
      {/* <div className="grass2"></div> */}
      {/* <img src={grass} className="section4-bush2" alt="" /> */}
    </>
  );
};

export default Section1Pricing;
