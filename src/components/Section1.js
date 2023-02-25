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
          <p className="home-firstline">Websites Crafted </p>
          <p className="home-secondline">For Service Businesses</p>
          <ul className="home-listul">
            <li className="home-listdiv">
              <img src={checkmark} className="home-checkmark" alt="" />{" "}
              <p className="home-listdivp ">Stand Out From The Competition</p>
            </li>
            <li className="home-listdiv">
              <img src={checkmark} className="home-checkmark" alt="" />{" "}
              <p>Impress Web Visitors</p>{" "}
            </li>
            <li className="home-listdiv">
              <img src={checkmark} className="home-checkmark" alt="" />{" "}
              <p>Go Pro For Just $29/month</p>{" "}
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
