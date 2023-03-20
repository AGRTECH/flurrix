import React from "react";

const Q16 = (props) => {
  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">
        Would You Like To Save 50% With Semi-Annual Pre-Pay?
      </p>
      <div style={{ display: "flex" }} className="onbording-sectioncontainer">
        <label className="onboarding-textoption1">
          <input
            onChange={(event) => {
              props.onStateChange(event.target.value);
              if (props.Q15answer == "Standard") {
                props.onStripeLinkChange(
                  "https://buy.stripe.com/aEUg0t8t33Hif5e3cg"
                );
              } else if (props.Q15answer === "Premium") {
                props.onStripeLinkChange(
                  "https://buy.stripe.com/4gw6pT7oZdhS6yIdQV"
                );
              } else if (props.Q15answer === "Ultimate") {
                props.onStripeLinkChange(
                  "https://buy.stripe.com/28o4hL24Fgu48GQbIO"
                );
              }
            }}
            type="radio"
            name="Prepay"
            value="Yes"
          />
          Yes, I would like to pre-pay for 50% savings
        </label>
        <label className="onboarding-textoption2">
          <input
            onChange={(event) => {
              props.onStateChange(event.target.value);
            }}
            type="radio"
            name="Prepay"
            value="No"
          />
          No, I want to pay monthly
        </label>
      </div>
    </div>
  );
};

export default Q16;
