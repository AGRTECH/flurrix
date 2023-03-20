import React from "react";
import pricingbg from "../img/pricingbg.png";
import grass from "../img/cartoongrass.png";
import checkmark from "../img/checkicon.svg";
import { Link } from "react-router-dom";

const Section1Pricing = () => {
  return (
    <>
      <div className="section1pricing-background">
        <div className="section1pricing-navbackground"></div>
        <div className="section1pricing-container">
          <div className="section1pricing-flex">
            <p className="section1pricing-firstline">A Quick Process</p>
            <p className="section1pricing-secondline">But Huge Result</p>
            <p className="section1pricing-subtitle">
              Get your top tier website up and running in under a week with our
              simple process
              <span className="section1pricing-bold"> </span>{" "}
            </p>
            {/* <p className="section1pricing-subsubtitle">
              -- Offer Expires 3/31/23 --
            </p> */}
            <div>
              <Link to={"/onboard"}>
                <button className="home-button">Get Started</button>
              </Link>
              <Link to={"/pricing"}>
                <button className="home-button">Pricing</button>
              </Link>
            </div>
          </div>
          <img src={pricingbg} className="landing-bg" alt="" />
        </div>
        {/* <img src={grass} className="home-grass1" alt="" /> */}
        {/* <div className="grass"></div> */}
        {/* <div className="grass2"></div> */}
        {/* <img src={grass} className="section4-bush2" alt="" /> */}
      </div>
    </>
  );
};

export default Section1Pricing;
