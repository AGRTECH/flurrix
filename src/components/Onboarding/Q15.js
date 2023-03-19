import React, { useState } from "react";
import { Link } from "react-router-dom";

const Q15 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">Which Plan Would You Like?</p>

      <div style={{ display: "flex" }} className="onbording-sectioncontainer">
        <label className="onboarding-textoption1">
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange(event.target.value);
              props.onStripeLinkChange(
                "https://buy.stripe.com/14k4hL8t3a5G0ak8wy"
              );
            }}
            type="radio"
            name="Plan"
            value="Standard"
          />
          Standard
        </label>
        <label className="onboarding-textoption2">
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange(event.target.value);
              props.onStripeLinkChange(
                "https://buy.stripe.com/cN201v38J91C0akcMN"
              );
            }}
            type="radio"
            name="Plan"
            value="Premium"
          />
          Premium
        </label>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        className="onbording-sectioncontainer"
      >
        <label className="onboarding-textoption1">
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange(event.target.value);
              props.onStripeLinkChange(
                "https://buy.stripe.com/3csg0t10Bgu4e1a5kn"
              );
            }}
            type="radio"
            name="Plan"
            value="Ultimate"
          />
          Ultimate
        </label>
        <Link className="onboarding-nostyle" to={"/pricing"} target="_blank">
          <p className="onboarding-pricing">
            Click To See Pricing Page To Check Out What's Offered In Each
            Package
          </p>
        </Link>
      </div>
      <div style={{ display: "flex" }}></div>
    </div>
  );
};

export default Q15;
