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
              Look like a pro for{" "}
              <span className="section1pricing-bold">
                {" "}
                all of Summer for free
              </span>{" "}
              with our buy 3 get 3 deal for all available plans (up to $1797 in
              savings)
            </p>
            <p className="section1pricing-subsubtitle">
              -- Offer Expires 3/31/23 --
            </p>
            <div>
              <Link to={"/contact"}>
                <button className="home-button">Video</button>
              </Link>
              <button className="home-button">Pricing</button>
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
