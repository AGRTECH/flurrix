import React from "react";
import paintbrush from "../img/greenbrush.png";
import greengears from "../img/greengears.png";
import greenlock from "../img/greenlock.png";
import greenbook from "../img/greenbook.png";
import greenbars from "../img/greenbars.png";
import greenmaintenance from "../img/maintenanceicon.png";

const Section4Pricing = () => {
  return (
    <div className="section4pricing-background">
      <h1 className="section2-title">
        Enjoy These Features On All Of The Above Plans
      </h1>
      {/* <p className="section2-subtitle">
        We <span className="section2-italic">scape</span> the web, so you can{" "}
        <span className="section2-italic">scape</span> more land
      </p> */}
      <div className="section2-container">
        <div className="section2-toprow">
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={paintbrush}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Professional Design</p>
              </li>
              <li>
                <p>
                  Impress new and current customers with a site designed by web
                  pros
                </p>
              </li>
            </ul>
          </div>
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={greengears}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Sales Focused</p>
              </li>
              <li>
                <p>
                  Websites optimized for trustability, professionalism, and
                  conversions
                </p>
              </li>
            </ul>
          </div>
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={greengears}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Mobile & Speed Optimized</p>
              </li>
              <li>
                <p>
                  Websites optimized for trustability, professionalism, and
                  conversions
                </p>
              </li>
            </ul>
          </div>
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img src={greenlock} className="section2-lockimg" alt="" />
              </li>
              <li>
                <p className="section2-service">Hosting & Security</p>
              </li>
              <li>
                <p>
                  Fixing any bugs and glitches that arise within your websites +
                  bi-weekly updates
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4Pricing;
