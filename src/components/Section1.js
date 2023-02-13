import React from "react";
import landscapingbg from "../img/cutbg7.jpg";
import grass from "../img/cartoongrass.png";

const Section1 = () => {
  return (
    <>
      {" "}
      <div className="home-container">
        <p className="home-firstline">Websites ONLY for Landscapers</p>
        <p className="home-secondline">
          Helping Landscapers connect to new clients in an evolving digital age
        </p>
        <button className="home-button">Get a site</button>
        <img src={landscapingbg} className="plumber-bg" alt="" />
      </div>
      <img src={grass} className="section4-bush" alt="" />
    </>
  );
};

export default Section1;
