import React from "react";
import landscapingbg from "../img/newbg1.png";
import grass from "../img/cartoongrass.png";

const Section1 = () => {
  return (
    <>
      {" "}
      <div className="home-container">
        <p className="home-firstline">Websites Crafted Just For Landscapers</p>
        <ul>
          <li>
            <img src="" alt="" />{" "}
            <p>Professional Online Brand - Get more leads</p>{" "}
          </li>
          <li>
            <img src="" alt="" /> Quick Turnaround - Get your site in as little
            as 14 days <p></p>{" "}
          </li>
          <li>
            <img src="" alt="" /> <p>Spend Less - Starting at just $99/month</p>{" "}
          </li>
        </ul>
        <button className="home-button">Get a site</button>
        <img src={landscapingbg} className="plumber-bg" alt="" />
      </div>
      <img src={grass} className="home-grass1" alt="" />
      <img src={grass} className="home-grass2" alt="" />
      {/* <img src={grass} className="section4-bush2" alt="" /> */}
    </>
  );
};

export default Section1;
