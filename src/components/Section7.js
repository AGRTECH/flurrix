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
            <p className="section7-nav1">The Process</p>
            <p className="section7-nav">Portfolio</p>
            <p className="section7-nav">Pricing</p>
            <p className="section7-nav">Contact</p>
          </div>
          <div className="section7-sections">
            <p className="section7-title">What We Offer</p>
            <div className="section7-servicecontainer">
              <div>
                <p className="section7-subtext">Pro Web Design</p>
                <p className="section7-subtext">Sales Optimization</p>
                <p className="section7-subtext">Lead Generation</p>
                <p className="section7-subtext">Lead Capture Pop-Ups</p>
              </div>
              <div className="section7-secondcol">
                <p className="section7-subtext">24/7 Support</p>
                <p className="section7-subtext">Guides</p>
                <p className="section7-subtext">Cold Email Templates</p>
                <p className="section7-subtext">SEO</p>
              </div>
            </div>
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
