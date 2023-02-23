import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <>
      <div className="contact-background">
        <div className="contact-container">
          <h1 className="contact-title">
            Get A Suprisingly High Quality Webiste Today
          </h1>
          <h3 className="contact-subtitle">
            Let's Talk About How You Can Domainate Your Local Area with a
            Pristine Digital Presence
          </h3>
          <form
            action="https://formsubmit.co/xarossx@yahoo.com"
            method="POST"
            className="contact-form"
          >
            <div className="contact-flex">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="contact-emailinput"
                required
                type="name"
                name="name"
                placeholder="Name *"
              />
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="contact-emailinput"
                required
                type="email"
                name="email"
                placeholder="Email Address *"
              />
            </div>
            <div className="contact-flex">
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="contact-emailinput"
                required
                type="name"
                name="name"
                placeholder="Name *"
              />
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="contact-emailinput"
                required
                type="email"
                name="email"
                placeholder="Email Address *"
              />
            </div>

            {/* <textarea
              name="message"
              placeholder="Your Message *"
              id=""
              cols="10"
              rows="7"
              className="contact-textinput"
              required
            ></textarea> */}
            <button className="contact-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
