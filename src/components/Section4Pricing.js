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
      <h1 className="section4pricing-title">
        Enjoy these features on all of the above plans
      </h1>
      {/* <p className="section2-subtitle">
        We <span className="section2-italic">scape</span> the web, so you can{" "}
        <span className="section2-italic">scape</span> more land
      </p> */}
      <div className="section4pricing-container">
        <div className="section4pricing-toprow">
          <div className="section4pricing-card">
            <ul className="section4pricing-list">
              <li>
                <img
                  src={paintbrush}
                  className="section4pricing-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section4pricing-service">Pro Design</p>
              </li>
              <li>
                <p className="section4pricing-description">
                  Impress new and current customers with a site designed by web
                  pros
                </p>
              </li>
            </ul>
          </div>
          <div className="section4pricing-card">
            <ul className="section4pricing-list">
              <li>
                <img
                  src={greengears}
                  className="section4pricing-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section4pricing-service">Sales Focus</p>
              </li>
              <li>
                <p>
                  We build every site with a strong intent for sales. This
                  includes many CTAs, trustability indicators, social proof, and
                  other tactics that will turn more leads into paying clients.
                </p>
              </li>
            </ul>
          </div>
          <div className="section4pricing-card">
            <ul className="section4pricing-list">
              <li>
                <img
                  src={greengears}
                  className="section4pricing-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section4pricing-service">Mobile Optimized</p>
              </li>
              <li>
                <p>
                  With over 65% of internet usage coming for mobile, It's more
                  import now than ever to give a pristine mobile experience
                </p>
              </li>
            </ul>
          </div>
          <div className="section4pricing-card">
            <ul className="section4pricing-list">
              <li>
                <img
                  src={greenlock}
                  className="section4pricing-lockimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section4pricing-service">Hosting & Security</p>
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
