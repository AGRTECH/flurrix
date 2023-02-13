import React from "react";
import paintbrush from "../img/greenbrush.png";
import greengears from "../img/greengears.png";
import greenlock from "../img/greenlock.png";
import greenbook from "../img/greenbook.png";
import greenbars from "../img/greenbars.png";

const Section2 = () => {
  return (
    <div className="section2-background">
      <p className="section2-title">Services</p>
      <p className="section2-subtitle">
        We <span className="section2-italic">scape</span> the web, so you can{" "}
        <span className="section2-italic">scape</span> more land
      </p>
      <div className="section2-container">
        <div className="section2-toprow">
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={paintbrush}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Website Design & Development</p>
              </li>
              <li>
                <p>Create a Professional Design and Feel</p>
              </li>
            </ul>
          </div>
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={greengears}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Coversion Rate Optimization</p>
              </li>
              <li>
                <p>Get More Paying Clients</p>
              </li>
            </ul>
          </div>
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img src={greenlock} className="section2-lockimg" alt="" />
              </li>
              <li>
                <p className="section2-service">
                  Secured Hosting & Maintenance
                </p>
              </li>
              <li>
                <p>Web Security and Updates </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="section2-toprow">
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={greenbars}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Search Engine Optimization</p>
              </li>
              <li>
                <p>Maximize Traffic to Your Site</p>
              </li>
            </ul>
          </div>
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={greenbook}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Copywriting & Story Telling</p>
              </li>
              <li>
                <p>It's Not About What You Say...</p>
              </li>
            </ul>
          </div>
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img
                  src={paintbrush}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Website Design & Development</p>
              </li>
              <li>
                <p>Professional Design & Feel</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
