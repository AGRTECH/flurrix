import React from "react";
import plumberbg from "../img/landscapinglandingbg1.jpg";
import computerviewing from "../img/computerscreenviewing.png";
import greencheckmark from "../img/greencheckmark.png";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <p className="home-firstline">Websites ONLY for Landscapers</p>
        <p className="home-secondline">
          Helping Landscapers connect to new clients in an evolving digital age
        </p>
        <button className="home-button">Get a site</button>
        <img src={plumberbg} className="plumber-bg" alt="" />
      </div>
      <div className="section2-container">
        <div>
          <img src={computerviewing} className="section2-computerimg" alt="" />
        </div>
        <div>
          <p className="section2-listtitle">
            We'll handle all the tech work so you can focus on your clients
          </p>{" "}
          <ul className="section2-list">
            <li className="section2-listitem">
              <img
                src={greencheckmark}
                className="section2-greencheck"
                alt=""
              />{" "}
              <p>Custom Web Design</p>
            </li>
            <li className="section2-listitem">
              <img
                src={greencheckmark}
                className="section2-greencheck"
                alt=""
              />{" "}
              <p>Site Maintenance</p>
            </li>
            <li className="section2-listitem">
              <img
                src={greencheckmark}
                className="section2-greencheck"
                alt=""
              />{" "}
              <p>Optimized for Conversions</p>
            </li>
            <li className="section2-listitem">
              <img
                src={greencheckmark}
                className="section2-greencheck"
                alt=""
              />{" "}
              <p>Search Engine Optimization</p>
            </li>
            <li className="section2-listitem">
              <img
                src={greencheckmark}
                className="section2-greencheck"
                alt=""
              />{" "}
              <p>Brand Message / Copywriting</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
