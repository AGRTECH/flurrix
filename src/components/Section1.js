import React from "react";
import landscapingbg from "../img/newbg1.png";
import grass from "../img/cartoongrass.png";
import checkmark from "../img/checkicon.svg";

const Section1 = () => {
  return (
    <>
      {" "}
      <div className="home-container">
        <p className="home-firstline">Websites Crafted </p>
        <p className="home-secondline">Just For Landscapers</p>
        <ul className="home-listul">
          <li className="home-listdiv">
            <img src={checkmark} className="home-checkmark" alt="" />{" "}
            <p>Stand Out From The Competition</p>
          </li>
          <li className="home-listdiv">
            <img src={checkmark} className="home-checkmark" alt="" />{" "}
            <p>Impress Web Visitors</p>{" "}
          </li>
          <li className="home-listdiv">
            <img src={checkmark} className="home-checkmark" alt="" />{" "}
            <p>Go Pro For Just $99/month</p>{" "}
          </li>
        </ul>
        <button className="home-button">Let's Chat</button>
        <button className="home-button2">Get a Site</button>
        <img src={landscapingbg} className="landing-bg" alt="" />
      </div>
      {/* <img src={grass} className="home-grass1" alt="" /> */}
      <div className="grass"></div>
      <div className="grass2"></div>
      {/* <img src={grass} className="section4-bush2" alt="" /> */}
    </>
  );
};

export default Section1;