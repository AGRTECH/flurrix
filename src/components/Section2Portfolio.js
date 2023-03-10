import React from "react";
import bushes from "../img/catoonbush3.png";
import palm from "../img/cartoonpalmm.png";
import siteone from "../img/herculespowerwashing1.jpg";
import sitetwo from "../img/horizonspreview.jpg";
import sitethree from "../img/shimmerpreview.jpg";
import { Link } from "react-router-dom";

const Section2Portfolio = () => {
  return (
    <div className="section2portfolio-background">
      <p className="section2portfolio-title">Dominate Your Local Area</p>
      <p className="section2-subtitle">
        Surprisingly high quality websites that will wow new and current
        customers
      </p>
      <div className="section2portfolio-container">
        <div className="section2-toprow">
          <div className="section2portfolio-cardtextcontainer">
            <div className="section2portfolio-card">
              <img src={sitethree} className="section2portfolio-img" alt="" />
              <Link to={"/shimmerexteriorcleaning"}>
                <button className="section2portfolio-btn">View Project</button>
              </Link>
            </div>
            <p>Shimmer Exterior Cleaning</p>
          </div>
          <div className="section2portfolio-cardtextcontainer">
            <div className="section2portfolio-card">
              <img src={siteone} className="section2portfolio-img" alt="" />
              <Link to={"/herculespowerwashing"}>
                <button className="section2portfolio-btn">View Project</button>
              </Link>
            </div>
            <p>Hercules Power Washing</p>
          </div>
          <div className="section2portfolio-cardtextcontainer">
            <div className="section2portfolio-card">
              <img src={sitetwo} className="section2portfolio-img" alt="" />
              <button className="section2portfolio-btn">View Project</button>
            </div>
            <p>Horizons Landscaping</p>
          </div>
        </div>
        {/* <img src={bushes} className="section4-bush" alt="" /> */}
        {/* <img src={palm} className="section4-bush2" alt="" /> */}
      </div>
    </div>
  );
};

export default Section2Portfolio;
