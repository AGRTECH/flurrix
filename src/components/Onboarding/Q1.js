import React from "react";

const Q1 = () => {
  return (
    <>
      <p>What Industry Is Your Business In?</p>
      <label>
        <input type="radio" name="option" value="option1" />
        Power Washing
      </label>
      <label>
        <input type="radio" name="option" value="option2" />
        Window Cleaning
      </label>
      <label>
        <input type="radio" name="option" value="option2" />
        Landscaping
      </label>
      <label>
        <input type="radio" name="option" value="option2" />
        Other
      </label>
      <p onClick="">NEXT</p>
    </>
  );
};

export default Q1;
