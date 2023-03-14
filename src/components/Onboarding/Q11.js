import React, { useState } from "react";

const Q11 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">
        Company Email Company Phone Number & Socials?
      </p>
      <div style={{ display: "flex" }}>
        <label>
          <input
            // onChange={(event) => {
            //   setAnswer1(event.target.value);
            //   props.onStateChange(event.target.value);
            // }}
            type="text"
            name="Company Email"
            placeholder="Company Email"
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
            name="Company Phone #"
            placeholder="Company Phone #"
            className="onboarding-textoption1"
          />
        </label>
      </div>
      <div style={{ display: "flex" }}>
        <label>
          <input
            onChange={(event) => setAnswer1(event.target.value)}
            type="text"
            name="Company Facebook"
            placeholder="Company Facebook"
            className="onboarding-textoption1"
          />
        </label>
        <label>
          <input
            type="text"
            name="Company Linkedin"
            placeholder="Company Linkedin"
            className="onboarding-textoption1"
          />
        </label>
      </div>
      <div style={{ display: "flex", marginBottom: "35px" }}>
        <label>
          <input
            type="text"
            name="Company Youtube"
            placeholder="Company Youtube"
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

export default Q11;
