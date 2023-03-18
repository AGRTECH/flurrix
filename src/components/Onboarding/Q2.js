import React from "react";
import upload from "./onboardingimg/uploadicon.png";

const Q2 = (props) => {
  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">
        Provide Your Best Photos That Highlight Your Company Best and That You'd
        Like On Your Website (Before and After Photos, Photos Of Your Team
        Working, Photos of Your Team, Photos Of Trucks Outside Houses, etc)
      </p>
      <div style={{ display: "flex" }} className="onbording-sectioncontainer">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdmey65m9_WXzI47caoSV_nBNoDkLu5-RdH4riveE-ulK3KAA/viewform?usp=sf_link"
          target="_blank"
          className="onboarding-googledoc onboarding-textoption1"
        >
          <img src={upload} className="onboarding-uploadimg" alt="" />
          Upload Photos
        </a>
        <label className="onboarding-textoption2">
          <input
            onChange={(event) => {
              props.onStateChange(event.target.value);
            }}
            type="radio"
            name="No Photos"
            value="No Photos"
          />
          I have no / few photos
        </label>
      </div>
    </div>
  );
};

export default Q2;
