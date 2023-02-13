import React, { useState } from "react";

const Section6 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="section6-background">
      <div className="section6-container">
        <div className="section6-contactcta">
          <p className="section6-boldtext">Contact Us</p>
          <p className="section6-subtext">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
            quod totam, quam voluptatem quae quasi voluptate
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
              placeholder="Email Address *"
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message *"
            id=""
            cols="10"
            rows="7"
            className="section6-textinput"
            required
          ></textarea>
          <button className="section6-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Section6;
