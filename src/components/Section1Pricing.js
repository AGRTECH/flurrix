import React from "react";
import landscapingbg from "../img/pricingbg3.jpg";
import grass from "../img/cartoongrass.png";
import checkmark from "../img/checkicon.svg";

const Section1Pricing = () => {
  return (
    <>
      {" "}
      <div className="home-container">
        <p className="home-firstline">Summer Time</p>
        <p className="home-secondline">Is Approaching</p>
        <p className="section1pricing-subtitle">
          Look like a pro for{" "}
          <span className="section1pricing-bold"> all of Summer for free</span>{" "}
          with our buy 3 get 3 deal for all available plans (up to $1797 in
          savings)
        </p>
        <p className="section1pricing-subsubtitle">
          -- Offer Expires 3/31/23 --
        </p>
        <button className="home-button">Let's Chat</button>
        <button className="section1pricing-button2">Get Summer Free</button>
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
