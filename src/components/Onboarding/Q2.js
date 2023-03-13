import React from "react";

const Q2 = (props) => {
  return (
    <>
      <p>
        Provide Your Best Photos That Highlight Your Company Best and That You'd
        Like On Your Website
      </p>
      <label>
        <input
          onChange={(event) => {
            props.onStateChange(event.target.value);
          }}
          type="file"
          accept="image/*"
        />
        I have no / few photos
      </label>
    </>
  );
};

export default Q2;
