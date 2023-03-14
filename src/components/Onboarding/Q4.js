import React, { useState } from "react";

const Q4 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <div className="onboarding-questioncontainer">
      <p>Which Layout Is best Suited For You?</p>
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
    </div>
  );
};

export default Q4;
