import React from "react";
import { Link } from "react-router-dom";

const Section3 = () => {
  return (
    <>
      <div className="section3-mowingicon">
        <div style={{ padding: "42px" }}></div>
      </div>
      <div className="section3-backgroundimg">
        <div className="section3-container">
          <p className="section3-title">Get An Entire Season For Free</p>
          <p className="section3-subtitle">
            Around{" "}
            <span className="section3-pop">
              80% of service company websites
            </span>{" "}
            we've analyzed either{" "}
            <span className="section3-pop">don't have a website</span> at all or
            have a <span className="section3-pop">severely outdated</span> one.
            We can help you advance to the next level and start converting more
            site visitors into clients.
          </p>
          <Link className="section3-link" to={"/onboard"}>
            <button className="section3-button">Get More Leads</button>
          </Link>
        </div>
      </div>
      <div className="faq-graphic"></div>
    </>
  );
};

export default Section3;
