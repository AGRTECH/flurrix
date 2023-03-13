import React from "react";

const Q7 = () => {
  const handleClick = () => {
    window.location.href = "https://buy.stripe.com/test_14k15C23Hfze1DG4gg";
  };
  return (
    <>
      <p>
        Congratulations! You're Ready To Start Your Journey with A Professional
        Grade Website!{" "}
      </p>
      <p onClick={handleClick}>Get Started</p>
    </>
  );
};

export default Q7;
