import React, { useState } from "react";

const Q13 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">
        Provide, If Any, Copywriting Ideas You Have
      </p>
      <div style={{ display: "flex" }}>
        <label>
          <input
            // onChange={(event) => {
            //   setAnswer1(event.target.value);
            //   props.onStateChange(event.target.value);
            // }}
            type="text"
            name="Copywriting Idea 1"
            placeholder="Copywriting Idea 1"
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
            name="Copywriting Idea 2"
            placeholder="Copywriting Idea 2"
            className="onboarding-textoption1"
          />
        </label>
      </div>
      <div style={{ display: "flex" }}>
        <label>
          <input
            onChange={(event) => setAnswer1(event.target.value)}
            type="text"
            name="Copywriting Idea 3"
            placeholder="Copywriting Idea 3"
            className="onboarding-textoption1"
          />
        </label>
        <label>
          <input
            type="text"
            name="Copywriting Idea 4"
            placeholder="Copywriting Idea 4"
            className="onboarding-textoption1"
          />
        </label>
      </div>
      <div style={{ display: "flex", marginBottom: "35px" }}>
        <label>
          <input
            type="text"
            name="Copywriting Idea 5"
            placeholder="Copywriting Idea 5"
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

export default Q13;
