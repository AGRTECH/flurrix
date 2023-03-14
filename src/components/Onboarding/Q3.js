import React from "react";

const Q3 = (props) => {
  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">Provide Your Company Logo</p>
      <label>
        <input
          onChange={(event) => {
            props.onStateChange(event.target.value);
          }}
          type="file"
          name="Logo"
          accept="image/*"
          multiple
        />
      </label>
      <label>
        <input
          onChange={(event) => {
            props.onStateChange(event.target.value);
          }}
          type="radio"
          name="Want New Logo"
        />
        I Want A New One
      </label>
    </div>
  );
};

export default Q3;
