import React, { useState } from "react";

const Section6 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="section6-background">
      <div className="section6-container">
        <div className="section6-contactcta">
          <p className="section6-boldtext">Elevate Your Digital Presence</p>
          <p className="section6-subtext">
            Get A Website That Drives In More Traffic And Converts More Into
            Paying Customers
          </p>
        </div>
        <form
          action="https://formsubmit.co/xarossx@yahoo.com"
          method="POST"
          className="section6-form"
        >
          <div>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="section6-emailinput"
              required
              type="name"
              name="name"
              placeholder="Name *"
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="section6-emailinput"
              required
              type="email"
              name="email"
              placeholder="Email *"
            />
          </div>
          <div>
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="section6-nameinput"
              required
              type="name"
              name="name"
              placeholder="Phone *"
            />
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="section6-nameinput"
              required
              type="email"
              name="email"
              placeholder="Website Or Business Name *"
            />
          </div>

          {/* <textarea
            name="message"
            placeholder="Your Message *"
            id=""
            cols="10"
            rows="7"
            className="section6-textinput"
            required
          ></textarea> */}
          <button className="section6-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Section6;
