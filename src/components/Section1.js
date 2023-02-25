import React from "react";
import landscapingbg from "../img/section1bg.png";
import grass from "../img/cartoongrass.png";
import checkmark from "../img/checkicon.svg";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <>
      {" "}
      <div className="home-container">
        <div className="home-leftcontainer">
          <p className="home-firstline">Websites Crafted For</p>
          <p className="home-secondline">The Service Industry</p>
          <ul className="home-listul">
            <li className="home-listdiv">
              <img src={checkmark} className="home-checkmark" alt="" />{" "}
              <p className="home-listdivp ">Get More Leads</p>
            </li>
            <li className="home-listdiv">
              <img src={checkmark} className="home-checkmark" alt="" />{" "}
              <p>Top 1%-5% Website In Your Area</p>{" "}
            </li>
            <li className="home-listdiv">
              <img src={checkmark} className="home-checkmark" alt="" />{" "}
              <p>Everything Done For You</p>{" "}
            </li>
          </ul>
          <div className="home-buttoncontainer">
            <Link to={"/contact"}>
              <button className="home-button">Let's Chat</button>
            </Link>
            <button className="home-button">Get More Leads</button>
          </div>
          <img src={landscapingbg} className="landing-bg" alt="" />
        </div>
        <div className="home-rightcontainer">
          <div className="home-placeholdervideo"></div>
        </div>
      </div>
      {/* <img src={grass} className="home-grass1" alt="" /> */}
      <div className="faq-graphic"></div>
      {/* <img src={grass} className="section4-bush2" alt="" /> */}
    </>
  );
};

export default Section1;
