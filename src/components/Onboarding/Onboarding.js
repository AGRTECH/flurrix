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
import Q14 from "./Q14";
import Q15 from "./Q15";
import AllQs from "./AllQs";

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answer1, setAnswer1] = useState(0);
  const [answer2, setAnswer2] = useState(0);
  const [parentState1, setParentState1] = useState();
  const [parentState2, setParentState2] = useState();
  const [parentState3, setParentState3] = useState();
  const [parentState4, setParentState4] = useState();
  const [parentState8, setParentState8] = useState();
  const [parentState88, setParentState88] = useState();
  const [parentState888, setParentState888] = useState();
  const [parentState8888, setParentState8888] = useState();
  const [parentState88888, setParentState88888] = useState();
  const [parentState888888, setParentState888888] = useState();
  const [parentState9, setParentState9] = useState();
  const [parentState99, setParentState99] = useState();
  const [parentState999, setParentState999] = useState();
  const [parentState9999, setParentState9999] = useState();
  const [parentState99999, setParentState99999] = useState();
  const [parentState999999, setParentState999999] = useState();
  const [parentState10, setParentState10] = useState();
  const [parentState1010, setParentState1010] = useState();
  const [parentState101010, setParentState101010] = useState();
  const [parentState10101010, setParentState10101010] = useState();
  const [parentState1010101010, setParentState1010101010] = useState();
  const [parentState101010101010, setParentState101010101010] = useState();
  const [parentState11, setParentState11] = useState();
  const [parentState1111, setParentState1111] = useState();
  const [parentState111111, setParentState111111] = useState();
  const [parentState11111111, setParentState11111111] = useState();
  const [parentState1111111111, setParentState1111111111] = useState();
  const [parentState111111111111, setParentState111111111111] = useState();
  const [parentState12, setParentState12] = useState();
  const [parentState13, setParentState13] = useState();
  const [parentState14, setParentState14] = useState();
  const [parentState15, setParentState15] = useState();
  const [stripeLink, setStripeLink] = useState();

  const steps = [
    <Q1 onStateChange={handleStateChange1} />,
    <Q8
      onStateChange={handleStateChange8}
      onStateChange2={handleStateChange88}
      onStateChange3={handleStateChange888}
      onStateChange4={handleStateChange8888}
      onStateChange5={handleStateChange88888}
      onStateChange6={handleStateChange888888}
    />,
    <Q9
      onStateChange={handleStateChange9}
      onStateChange2={handleStateChange99}
      onStateChange3={handleStateChange999}
      onStateChange4={handleStateChange9999}
      onStateChange5={handleStateChange99999}
      onStateChange6={handleStateChange999999}
    />,
    <Q10
      onStateChange={handleStateChange10}
      onStateChange2={handleStateChange1010}
      onStateChange3={handleStateChange101010}
      onStateChange4={handleStateChange10101010}
      onStateChange5={handleStateChange1010101010}
      onStateChange6={handleStateChange101010101010}
    />,
    // <Q12 onStateChange={handleStateChange12} />,
    // <Q13 onStateChange={handleStateChange13} />,
    <Q2 onStateChange={handleStateChange2} />,
    <Q11
      onStateChange={handleStateChange11}
      onStateChange2={handleStateChange1111}
      onStateChange3={handleStateChange111111}
      onStateChange4={handleStateChange11111111}
      onStateChange5={handleStateChange1111111111}
      onStateChange6={handleStateChange111111111111}
    />,
    <Q4 onStateChange={handleStateChange4} />,
    <Q14 onStateChange={handleStateChange14} />,
    <Q15
      onStateChange={handleStateChange15}
      onStripeLinkChange={onStripeLinkChange}
    />,
    <Q7 selectedPlan={stripeLink} />,
  ];

  const answers = [
    parentState1,
    parentState2,
    parentState4,
    parentState8,
    parentState88,
    parentState888,
    parentState8888,
    parentState88888,
    parentState888888,
    parentState9,
    parentState99,
    parentState999,
    parentState9999,
    parentState99999,
    parentState999999,
    parentState10,
    parentState1010,
    parentState101010,
    parentState10101010,
    parentState1010101010,
    parentState101010101010,
    parentState11,
    parentState1111,
    parentState111111,
    parentState11111111,
    parentState1111111111,
    parentState111111111111,
    parentState12,
    parentState13,
    parentState14,
    parentState15,
  ];
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
    setParentState4(newState);
  }
  function handleStateChange8(newState) {
    setParentState8(newState);
  }
  function handleStateChange88(newState) {
    setParentState88(newState);
  }
  function handleStateChange888(newState) {
    setParentState888(newState);
  }
  function handleStateChange8888(newState) {
    setParentState8888(newState);
  }
  function handleStateChange88888(newState) {
    setParentState88888(newState);
  }
  function handleStateChange888888(newState) {
    setParentState888888(newState);
  }
  function handleStateChange9(newState) {
    setParentState9(newState);
  }
  function handleStateChange99(newState) {
    setParentState99(newState);
  }
  function handleStateChange999(newState) {
    setParentState999(newState);
  }
  function handleStateChange9999(newState) {
    setParentState9999(newState);
  }
  function handleStateChange99999(newState) {
    setParentState99999(newState);
  }
  function handleStateChange999999(newState) {
    setParentState999999(newState);
  }
  function handleStateChange10(newState) {
    setParentState10(newState);
  }
  function handleStateChange1010(newState) {
    setParentState1010(newState);
  }
  function handleStateChange101010(newState) {
    setParentState101010(newState);
  }
  function handleStateChange10101010(newState) {
    setParentState10101010(newState);
  }
  function handleStateChange1010101010(newState) {
    setParentState1010101010(newState);
  }
  function handleStateChange101010101010(newState) {
    setParentState101010101010(newState);
  }
  function handleStateChange11(newState) {
    setParentState11(newState);
  }
  function handleStateChange1111(newState) {
    setParentState1111(newState);
  }
  function handleStateChange111111(newState) {
    setParentState111111(newState);
  }
  function handleStateChange11111111(newState) {
    setParentState11111111(newState);
  }
  function handleStateChange1111111111(newState) {
    setParentState1111111111(newState);
  }
  function handleStateChange111111111111(newState) {
    setParentState111111111111(newState);
  }

  function handleStateChange12(newState) {
    setParentState12(newState);
  }
  function handleStateChange13(newState) {
    setParentState13(newState);
  }
  function handleStateChange14(newState) {
    setParentState14(newState);
  }

  function handleStateChange15(newState) {
    setParentState15(newState);
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

  function onStripeLinkChange(newState) {
    setStripeLink(newState);
  }

  // if (parentState15 === "Premium") {
  //   setStripeLink("https://buy.stripe.com/test_14k15C23Hfze1DG4gg");
  // } else if (parentState15 === "Standard") {
  //   setStripeLink("standardlink");
  // }

  console.log(stripeLink);

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
        <input type="hidden" name="_next" value={stripeLink}></input>
        <input type="hidden" name="_captcha" value="false"></input>
        {steps[currentStep]}
        {/* {currentStep === 11 && <button type="submit">Submit</button>} */}

        <input
          className="onboarding-hiddenanswers"
          type="text"
          name="answers"
          value={answers}
        ></input>

        <div className="onboarding-pagediv">
          <div onClick={handlePreviousClick} style={{ display: "flex" }}>
            {currentStep !== 0 && (
              <img className="onboarding-arrow2" src={arrow2} alt="" />
            )}
            {currentStep !== 0 && <p className="onboarding-prev">Previous</p>}
          </div>
          <div onClick={handleNextClick} style={{ display: "flex" }}>
            {currentStep !== 9 && <p className="onboarding-next">Next</p>}
            {currentStep !== 9 && (
              <img className="onboarding-arrow1" src={arrow1} alt="" />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Onboarding;
