import React, { useState } from "react";

const Q8 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">Services Offered?</p>
      <div style={{ display: "flex" }} className="onbording-sectioncontainer">
        <label style={{ overflowY: "hidden" }}>
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange(event.target.value);
            }}
            type="text"
            name="Service 1"
            placeholder="Service 1"
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
            name="Service 2"
            placeholder="Service 2"
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
            name="Service 3"
            placeholder="Service 3"
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
            name="Service 4"
            placeholder="Service 4"
            className="onboarding-textoption4"
          />
        </label>
      </div>
      <div
        style={{ display: "flex" }}
        className="onbording-sectioncontainer onboarding-margbottom "
      >
        <label style={{ overflowY: "hidden" }}>
          <input
            onChange={(event) => {
              setAnswer1(event.target.value);
              props.onStateChange5(event.target.value);
            }}
            type="text"
            name="Service 5"
            placeholder="Service 5"
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

export default Q8;
