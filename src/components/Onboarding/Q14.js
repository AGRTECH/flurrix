import React from "react";
import { Link } from "react-router-dom";

const Q14 = (props) => {
  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">Terms Of Service Agreement</p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          overflowY: "hidden",
        }}
      >
        <label className="onboarding-textoption2">
          <input
            onChange={(event) => {
              props.onStateChange(event.target.value);
            }}
            type="radio"
            name="Contract Agreement"
            value="Agreed"
          />
          By checking this box you agree to the 6 month agreement and understand
          the termination pentalty of 1.5 months based on package chosen if you
          terminate the agreement before 6 months has passed after the first
          payment
        </label>
        <Link
          className="onboarding-nostyle"
          to={"/termsofservice"}
          target="_blank"
        >
          <p className="onboarding-agreement">
            Click To See Full Agreement Terms
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Q14;
