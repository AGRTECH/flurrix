import React, { useState } from "react";

const Q1 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">What Industry Is Your Business In?</p>
      <div style={{ display: "flex" }} className="onbording-sectioncontainer">
        <label className="onboarding-textoption1">
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange(event.target.value);
            }}
            type="radio"
            name="Industy"
            value="Power Washing"
          />
          Power Washing
        </label>
        <label className="onboarding-textoption2">
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange(event.target.value);
            }}
            type="radio"
            name="Industy"
            value="Window Cleaning"
          />
          Window Cleaning
        </label>
      </div>
      <div style={{ display: "flex" }} className="onbording-sectioncontainer">
        <label className="onboarding-textoption1">
          <input
            onChange={(event) => setAnswer1(event.target.value)}
            type="radio"
            name="Industy"
            value="Landscaping"
          />
          Landscaping
        </label>
        <label className="onboarding-textoption2">
          <input type="radio" name="Industy" value="Janitor" />
          Janitor
        </label>
      </div>
      <div
        style={{ display: "flex" }}
        className="onbording-sectioncontainer onboarding-margbottom."
      >
        <label className="onboarding-textoption1">
          <input type="radio" name="Industy" value="Maid" />
          Maid
        </label>
        <label className="onboarding-textoption2">
          <input type="radio" name="Industy" value="Other" />
          Other
        </label>
      </div>
      <div style={{ display: "flex" }}></div>
    </div>
  );
};

export default Q1;
