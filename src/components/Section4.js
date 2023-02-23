import React from "react";
import bushes from "../img/catoonbush3.png";
import palm from "../img/cartoonpalmm.png";
import siteone from "../img/herculespowerwashing1.jpg";

const Section4 = () => {
  return (
    <div className="section4-background">
      <p className="section4-title">Dominate Your Local Area</p>
      <p className="section2-subtitle">
        Surprisingly high quality websites that will wow new and current
        customers
      </p>
      <div className="section4-container">
        <div className="section2-toprow">
          <div className="section4-cardtextcontainer">
            <div className="section4-card">
              <img src={siteone} className="section4-img" alt="" />
              <button className="section4-btn">View Project</button>
            </div>
            <p>Site 1</p>
          </div>
          <div className="section4-cardtextcontainer">
            <div className="section4-card">
              <img src={siteone} className="section4-img" alt="" />
              <button className="section4-btn">View Project</button>
            </div>
            <p>Site 2</p>
          </div>
          <div className="section4-cardtextcontainer">
            <div className="section4-card">
              <img src={siteone} className="section4-img" alt="" />
              <button className="section4-btn">View Project</button>
            </div>
            <p>Site 3</p>
          </div>
        </div>
        {/* <img src={bushes} className="section4-bush" alt="" /> */}
        {/* <img src={palm} className="section4-bush2" alt="" /> */}
      </div>
    </div>
  );
};

export default Section4;
