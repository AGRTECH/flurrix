import React from "react";

const Section3 = () => {
  return (
    <>
      <div className="section3-mowingicon">
        <div style={{ padding: "42px" }}></div>
      </div>
      <div className="section3-backgroundimg">
        <div className="section3-container">
          <p className="section3-title">Mow Down the Competition</p>
          <p className="section3-subtitle">
            Around{" "}
            <span className="section3-pop">
              85% of landscaping company sites
            </span>{" "}
            we've analyzed either{" "}
            <span className="section3-pop">don't have a website</span> at all or
            have a <span className="section3-pop">severely outdated</span> one.
            We can help you advance to the next level and start converting more
            site visitors into clients
          </p>
          <button className="section3-button">Get a Site</button>
        </div>
      </div>
    </>
  );
};

export default Section3;
