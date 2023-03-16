import React from "react";

const Q7 = (props) => {
  const handleStripe = () => {
    window.location.href = props.selectedPlan;
  };
  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">
        Congratulations! You're Ready To Start Your Journey with A Professional
        Grade Website!{" "}
      </p>
      <button
        className="onboarding-getstarted"
        type="submit"
        onClick={handleStripe}
      >
        Get Started
      </button>
    </div>
  );
};

export default Q7;
