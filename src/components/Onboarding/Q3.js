import React from "react";

const Q3 = (props) => {
  return (
    <>
      <p>Provide Your Company Logo</p>
      <label>
        <input
          onChange={(event) => {
            props.onStateChange(event.target.value);
          }}
          type="file"
          accept="image/*"
        />
        My logo is low quality / I want a new logo
      </label>
    </>
  );
};

export default Q3;
