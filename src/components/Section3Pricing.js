import React from "react";
import logo from "../img/flurrixtrans4.png";

const Section3Pricing = () => {
  return (
    <>
      <div className="section3pricing-background">
        <h1 className="section3pricing-title">Why Chose Flurrix?</h1>
        <div className="section3pricing-container">
          <div className="section3pricing-titles">
            <ul className="section3pricing-titleslist">
              <li className="section3pricing-blank"></li>
              <li>DIY</li>
              <li>Freelancers</li>
              <li>Other Agencies</li>
              <li className="section3pricing-ustitle">
                <img src={logo} className="section3pricing-logo" alt="" />{" "}
              </li>
            </ul>
          </div>
          <div className="section3pricing-colcontainer">
            <div className="section3pricing-col2">
              <ul className="section3pricing-col2list">
                <li>Setup Cost</li>
                <li>Time & Effort</li>
                <li>Quality</li>
                <li>Custom Design</li>
                <li>Maintenance</li>
              </ul>
            </div>
            <div className="section3pricing-col1">
              <ul className="section3pricing-col1list">
                <li>$100+</li>
                <li>10/10</li>
                <li>Lowest</li>
                <li>X</li>
                <li>X</li>
              </ul>
            </div>
            <div className="section3pricing-col1">
              <ul className="section3pricing-col1list">
                <li>$2500</li>
                <li>8/10</li>
                <li>Low</li>
                <li>X</li>
                <li>X</li>
              </ul>
            </div>
            <div className="section3pricing-col1">
              <ul className="section3pricing-col1list">
                <li>$6000+</li>
                <li>4/10</li>
                <li>Low-Mid</li>
                <li>X</li>
                <li>X</li>
              </ul>
            </div>
            <div className="section3pricing-colus">
              <ul className="section3pricing-coluslist">
                <li>Lost Cost Monthly Financing OR 50% with pre-pay</li>
                <li>Everything Done For You</li>
                <li>Top 1% Site in Your Area</li>
                <li>One of a Kind</li>
                <li>Reocurring Maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="section3pricing-graphic"></div>
    </>
  );
};

export default Section3Pricing;
