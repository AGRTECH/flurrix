import React, { useState } from "react";
import arrow1 from "./onboardingimg/whitearrow.png";
import arrow2 from "./onboardingimg/whitearrow2.png";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import Q7 from "./Q7";
import Q8 from "./Q8";
import Q9 from "./Q9";
import Q10 from "./Q10";
import Q11 from "./Q11";
import Q12 from "./Q12";
import Q13 from "./Q13";
import AllQs from "./AllQs";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answer1, setAnswer1] = useState(0);
  const [answer2, setAnswer2] = useState(0);
  const [parentState1, setParentState1] = useState();
  const [parentState2, setParentState2] = useState();
  const [parentState3, setParentState3] = useState();
  const [parentState4, setParentState4] = useState();

  const steps = [
    <Q1 onStateChange={handleStateChange1} />,
    <Q8 />,
    <Q9 />,
    <Q10 />,
    <Q12 />,
    <Q13 />,
    <Q2 onStateChange={handleStateChange2} />,
    <Q3 onStateChange={handleStateChange3} />,
    <Q11 />,
    <Q4 onStateChange={handleStateChange4} />,
    <Q7 />,
  ];

  const answers = [parentState1, parentState2, parentState3, parentState4];
  console.log(answers);

  function handleStateChange1(newState) {
    setParentState1(newState);
  }

  function handleStateChange2(newState) {
    setParentState2(newState);
  }

  function handleStateChange3(newState) {
    setParentState3(newState);
  }

  function handleStateChange4(newState) {
    setParentState3(newState);
  }

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePreviousClick = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleAnswer1 = () => {
    setAnswer1(currentStep - 1);
  };

  const handleAnswer2 = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      <p className="onboarding-globaltitle">
        Get the Best Website In Your Area and Be Miles Ahead Of The Competition
      </p>
      <form
        action="https://formsubmit.co/xarossx@yahoo.com"
        method="POST"
        className="onboarding-form"
      >
        {steps[currentStep]}
        {currentStep === 3 && <button type="submit">Submit</button>}
        <div className="onboarding-pagediv">
          <div onClick={handlePreviousClick} style={{ display: "flex" }}>
            <img className="onboarding-arrow2" src={arrow2} alt="" />
            {currentStep !== -1 && <p className="onboarding-prev">Previous</p>}
          </div>
          <div onClick={handleNextClick} style={{ display: "flex" }}>
            <p className="onboarding-next">Next</p>
            <img className="onboarding-arrow1" src={arrow1} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Onboarding;
