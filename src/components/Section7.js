import React from "react";
import logo from "../img/flurrixwhitetrans.png";

const Section7 = () => {
  return (
    <>
      <div className="section7-background">
        <div className="section7-container">
          <div className="section7-sections">
            <img src={logo} className="section7-logo" alt="" />
            <p className="section7-about">
              Flurrix are a web design company focused on making conversion
              optimized sites for service businesses
            </p>
          </div>
          <div className="section7-sections">
            <p className="section7-nav">Our Work</p>
            <p className="section7-nav">About</p>
            <p className="section7-nav">Contact</p>
          </div>
          <div className="section7-sections">
            <p className="section7-title">Services</p>
            <p className="section7-subtext">Website Design & Development</p>
            <p className="section7-subtext">Coversion Rate Optimization</p>
            <p className="section7-subtext">Secured Hosting & Maintenance</p>
            <p className="section7-subtext">Search Engine Optimization</p>
            <p className="section7-subtext">Copywriting & Story Telling</p>
            <p className="section7-subtext">Website Design & Development</p>
          </div>
          <div>
            <p className="section7-title">Contact Us</p>
            <p className="section7-subtext">(586) 651-6917</p>
            <p className="section7-subtext">email</p>
          </div>
        </div>
      </div>
      <div className="section8-background">
        <div className="section8-container">
          <p className="section8-copyright">
            © 2023 Flurrix. All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Section7;
