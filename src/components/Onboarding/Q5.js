import React, { useState } from "react";

const Q5 = (props) => {
  const [answer1, setAnswer1] = useState(0);

  return (
    <div className="onboarding-questioncontainer">
      <p>
        Would You Like a Popup that captures more leads? (Free with this
        package)
      </p>
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

export default Q5;
