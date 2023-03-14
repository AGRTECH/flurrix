import React from "react";

const Q2 = (props) => {
  return (
    <div className="onboarding-questioncontainer">
      <p className="onboarding-title">
        Provide Your Best Photos That Highlight Your Company Best and That You'd
        Like On Your Website (Before and After Photos, Photos Of Your Team
        Working, Photos of Your Team, Photos Of Trucks Outside Houses, etc)
      </p>
      <label>
        <input
          onChange={(event) => {
            props.onStateChange(event.target.value);
          }}
          type="file"
          accept="image/*"
          multiple
        />
        I have no / few photos
      </label>
    </div>
  );
};

export default Q2;
