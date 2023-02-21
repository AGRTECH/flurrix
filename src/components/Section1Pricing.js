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
        <p className="section1pricing-subtitle">
          Buy 3 get 3 FREE ($600 savings) local summertime domination package
          when you sign up today! Get half of the biggest season of the year,
          summer, for FREE! | If you love your site for 2 months, get 2 months
          for free!
        </p>
        <button className="home-button">Let's Chat</button>
        <button className="section1pricing-button2">Choose A Plan</button>
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
