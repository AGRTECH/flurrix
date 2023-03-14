import React, { useState } from "react";

const Q8 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">What Services Do You Offer?</p>
      <div style={{ display: "flex" }}>
        <label>
          <input
            // onChange={(event) => {
            //   setAnswer1(event.target.value);
            //   props.onStateChange(event.target.value);
            // }}
            type="text"
            name="Service 1"
            placeholder="Service 1"
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
            name="Service 2"
            placeholder="Service 2"
            className="onboarding-textoption2"
          />
        </label>
      </div>
      <div style={{ display: "flex" }}>
        <label>
          <input
            onChange={(event) => setAnswer1(event.target.value)}
            type="text"
            name="Service 3"
            placeholder="Service 3"
            className="onboarding-textoption1"
          />
        </label>
        <label>
          <input
            type="text"
            name="Service 4"
            placeholder="Service 4"
            className="onboarding-textoption2"
          />
        </label>
      </div>
      <div style={{ display: "flex", marginBottom: "35px" }}>
        <label>
          <input
            type="text"
            name="Service 5"
            placeholder="Service 5"
            className="onboarding-textoption1"
          />
        </label>
        <label>
          <input
            type="text"
            name="Others"
            placeholder="All Others If Any"
            className="onboarding-textoption2"
          />
        </label>
      </div>
      <div style={{ display: "flex" }}></div>
    </div>
  );
};

export default Q8;
