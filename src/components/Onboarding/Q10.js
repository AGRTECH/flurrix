import React, { useState } from "react";

const Q10 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">
        What Info Do You Need From Your Clients For Your Contact / Quote Form?
      </p>
      <div style={{ display: "flex" }}>
        <label>
          <input
            // onChange={(event) => {
            //   setAnswer1(event.target.value);
            //   props.onStateChange(event.target.value);
            // }}
            type="text"
            name="Contact Form Info 1"
            placeholder="Contact Form Info 1"
            className="onboarding-textoption1"
          />
        </label>
        <label>
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange(event.target.value);
            }}
            type="text"
            name="Contact Form Info 2"
            placeholder="Contact Form Info 2"
            className="onboarding-textoption1"
          />
        </label>
      </div>
      <div style={{ display: "flex" }}>
        <label>
          <input
            onChange={(event) => setAnswer1(event.target.value)}
            type="text"
            name="Contact Form Info 3"
            placeholder="Contact Form Info 3"
            className="onboarding-textoption1"
          />
        </label>
        <label>
          <input
            type="text"
            name="Contact Form Info 4"
            placeholder="Contact Form Info 4"
            className="onboarding-textoption1"
          />
        </label>
      </div>
      <div style={{ display: "flex", marginBottom: "35px" }}>
        <label>
          <input
            type="text"
            name="Contact Form Info 5"
            placeholder="Contact Form Info 5"
            className="onboarding-textoption1"
          />
        </label>
        <label>
          <input
            type="text"
            name="Others"
            placeholder="All Others If Any"
            className="onboarding-textoption1"
          />
        </label>
      </div>
      <div style={{ display: "flex" }}></div>
    </div>
  );
};

export default Q10;
