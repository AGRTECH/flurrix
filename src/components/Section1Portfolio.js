import React from "react";
import pricingbg from "../img/pricingbg.png";
import grass from "../img/cartoongrass.png";
import checkmark from "../img/checkicon.svg";
import { Link } from "react-router-dom";

const Section1Portfolio = () => {
  return (
    <>
      <div className="section1pricing-background">
        <div className="section1pricing-navbackground"></div>
        <div className="section1pricing-container">
          <div className="section1pricing-flex">
            <p className="section1pricing-firstline">Check Out </p>
            <p className="section1pricing-secondline">Our Work</p>
            <p className="section1pricing-subtitle">
              The type of website that your competitors wish they had.
              <span className="section1pricing-bold"> </span>{" "}
            </p>
            <p className="section1pricing-subsubtitle"></p>
            <div>
              <Link to={"/contact"}>
                <button className="home-button">Let's Chat</button>
              </Link>
              <button className="home-button">Get Summer Free</button>
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

export default Section1Portfolio;
