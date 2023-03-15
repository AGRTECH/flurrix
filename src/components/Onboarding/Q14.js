import React from "react";
import { Link } from "react-router-dom";

const Q14 = (props) => {
  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">Terms Of Service Agreement</p>
      <div style={{ display: "flex" }}>
        <Link to={"/termsofservice"}>
          <p>Agreement Terms</p>
        </Link>
        <label className="onboarding-textoption2">
          <input
            onChange={(event) => {
              props.onStateChange(event.target.value);
            }}
            type="radio"
            name="Contract Agreement"
          />
          By checking this box you agree to the 6 month agreement and understand
          the termination pentalty of 1.5 months based on package chosen if you
          terminate the agreement before 6 months has passed after the first
          payment
        </label>
      </div>
    </div>
  );
};

export default Q14;
