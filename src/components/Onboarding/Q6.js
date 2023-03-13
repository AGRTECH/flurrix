import React, { useState } from "react";

const Q6 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <>
      <p>Website URL & Other info if I cant get that from Stripe</p>
      <label>
        <input
          onChange={(event) => {
            setAnswer1(event.target.value);
            props.onStateChange(event.target.value);
          }}
          type="radio"
          name="Layout"
          value="1"
        />
        1
      </label>
      <label>
        <input
          onChange={(event) => {
            setAnswer1(event.target.value);
            props.onStateChange(event.target.value);
          }}
          type="radio"
          name="Layout"
          value="2"
        />
        2
      </label>
      <label>
        <input
          onChange={(event) => setAnswer1(event.target.value)}
          type="radio"
          name="Layout"
          value="3"
        />
        3
      </label>
    </>
  );
};

export default Q6;
