import React, { useState } from "react";

const Q12 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">Guarantees / Offers / Deals You Have?</p>
      <div style={{ display: "flex" }}>
        <label>
          <input
            // onChange={(event) => {
            //   setAnswer1(event.target.value);
            //   props.onStateChange(event.target.value);
            // }}
            type="text"
            name="Guarantee / Offer / Deal 1"
            placeholder="Guarantee / Offer / Deal 1"
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
            name="Guarantee / Offer / Deal 2"
            placeholder="Guarantee / Offer / Deal 2"
            className="onboarding-textoption1"
          />
        </label>
      </div>
      <div style={{ display: "flex" }}>
        <label>
          <input
            onChange={(event) => setAnswer1(event.target.value)}
            type="text"
            name="Guarantee / Offer / Deal 3"
            placeholder="Guarantee / Offer / Deal 3"
            className="onboarding-textoption1"
          />
        </label>
        <label>
          <input
            type="text"
            name="Guarantee / Offer / Deal 4"
            placeholder="Guarantee / Offer / Deal 4"
            className="onboarding-textoption1"
          />
        </label>
      </div>
      <div style={{ display: "flex", marginBottom: "35px" }}>
        <label>
          <input
            type="text"
            name="Guarantee / Offer / Deal 5"
            placeholder="Guarantee / Offer / Deal 5"
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

export default Q12;
