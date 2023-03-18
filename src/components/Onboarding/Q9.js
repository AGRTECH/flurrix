import React, { useState } from "react";

const Q9 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">Cities / Areas Serviced Most?</p>
      <div style={{ display: "flex" }} className="onbording-sectioncontainer">
        <label style={{ overflowY: "hidden" }}>
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange(event.target.value);
            }}
            type="text"
            name="Area 1"
            placeholder="Area 1"
            className="onboarding-textoption3"
          />
        </label>
        <label style={{ overflowY: "hidden" }}>
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange2(event.target.value);
            }}
            type="text"
            name="Area 2"
            placeholder="Area 2"
            className="onboarding-textoption4"
          />
        </label>
      </div>
      <div style={{ display: "flex" }} className="onbording-sectioncontainer">
        <label style={{ overflowY: "hidden" }}>
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange3(event.target.value);
            }}
            type="text"
            name="Area 3"
            placeholder="Area 3"
            className="onboarding-textoption3"
          />
        </label>
        <label style={{ overflowY: "hidden" }}>
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange4(event.target.value);
            }}
            type="text"
            name="Area 4"
            placeholder="Area 4"
            className="onboarding-textoption4"
          />
        </label>
      </div>
      <div
        style={{ display: "flex" }}
        className="onbording-sectioncontainer onboarding-margbottom"
      >
        <label style={{ overflowY: "hidden" }}>
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange5(event.target.value);
            }}
            type="text"
            name="Area 5"
            placeholder="Area 5"
            className="onboarding-textoption3"
          />
        </label>
        <label style={{ overflowY: "hidden" }}>
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange6(event.target.value);
            }}
            type="text"
            name="Others"
            placeholder="All Others If Any"
            className="onboarding-textoption4"
          />
        </label>
      </div>
      <div style={{ display: "flex" }}></div>
    </div>
  );
};

export default Q9;
