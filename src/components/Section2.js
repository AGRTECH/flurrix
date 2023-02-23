import React from "react";
import paintbrush from "../img/greenbrush.png";
import greengears from "../img/greengears.png";
import greenlock from "../img/greenlock.png";
import greenbook from "../img/greenbook.png";
import greenbars from "../img/greenbars.png";
import greenmaintenance from "../img/maintenanceicon.png";

const Section2 = () => {
  return (
    <div className="section2-background">
      <h1 className="section2-title">Connect With More Customers</h1>
      <p className="section2-subtitle">
        Having an optimized digital presence as a service business owner is
        becoming increasingly more important every year
        <span className="section2-italic"></span>
        <span className="section2-italic"></span>
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
                <p className="section2-service">Professional Design</p>
              </li>
              <li>
                <p>
                  Impress new and current customers with a site that will be in
                  the top 1%-5% in your area in terms of optimization, design
                  and professionalism
                </p>
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
                <p className="section2-service">Get More Leads</p>
              </li>
              <li>
                <p>
                  Websites optimized to not only attract new people with SEO,
                  but also designed to turn a higher percentage into paying
                  customers
                </p>
              </li>
            </ul>
          </div>
          <div className="section2-card">
            <ul className="section2-list">
              <li>
                <img src={greenlock} className="section2-lockimg" alt="" />
              </li>
              <li>
                <p className="section2-service">Maintenance & Updates</p>
              </li>
              <li>
                <p>
                  Frequent security checkups and updates so you'll never have to
                  worry about your site not being in top condition
                </p>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="section2-toprow">
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
                  src={greenmaintenance}
                  className="section2-paintbrushimg"
                  alt=""
                />
              </li>
              <li>
                <p className="section2-service">Maintenance & Updates</p>
              </li>
              <li>
                <p>Keep Your Site Fresh</p>
              </li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Section2;
