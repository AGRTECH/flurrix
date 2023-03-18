import React, { useState } from "react";
import shimmer from "./onboardingimg/shimmerfullscreen.png";
import herc from "./onboardingimg/herculesfullscreen2.png";
import horizons from "./onboardingimg/horizonsfullscreen.png";

const Q4 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">Which Layout Is best Suited For You?</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
          height: "220px",
        }}
        className="onboarding-layoutsection"
      >
        <label>
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange(event.target.value);
            }}
            type="radio"
            name="Layout"
            value="1"
          />
          <span className="onboarding-layoutnum">1</span>
        </label>
        <img className="onboarding-preview" src={shimmer} alt="" />
        <label>
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange(event.target.value);
            }}
            type="radio"
            name="Layout"
            value="2"
          />
          <span className="onboarding-layoutnum">2</span>
        </label>
        <img className="onboarding-preview" src={herc} alt="" />
        <label>
          <input
            onChange={(event) => setAnswer1(event.target.value)}
            type="radio"
            name="Layout"
            value="3"
          />
          <span className="onboarding-layoutnum">3</span>
        </label>
        <img className="onboarding-preview" src={horizons} alt="" />
      </div>
    </div>
  );
};

export default Q4;
