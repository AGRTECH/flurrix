import React from "react";
import plumberbg from "../img/landscapinglandingbg1.jpg";
import paintbrush from "../img/greenpaintbrush.png";
import greengears from "../img/greengears.png";
import greenlock from "../img/greenlock.png";
import computerviewing from "../img/computerscreenviewing.png";
import greencheckmark from "../img/greencheckmark.png";

// Model off of tinyfrog.com

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <p className="home-firstline">Websites ONLY for Landscapers</p>
        <p className="home-secondline">
          Helping Landscapers connect to new clients in an evolving digital age
        </p>
        <button className="home-button">Get a site</button>
        <img src={plumberbg} className="plumber-bg" alt="" />
      </div>
      <div className="section2-background">
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
                  <p className="section2-service">
                    Website Design & Development
                  </p>
                </li>
                <li>
                  <p>Create a Professional Design and Feel for Your Brand</p>
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
                  <p className="section2-service">
                    Coversion Rate Optimization
                  </p>
                </li>
                <li>
                  <p>Get more paying clients</p>
                </li>
              </ul>
            </div>
            <div className="section2-card">
              <ul className="section2-list">
                <li>
                  <img
                    src={greenlock}
                    className="section2-paintbrushimg"
                    alt=""
                  />
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
                    src={paintbrush}
                    className="section2-paintbrushimg"
                    alt=""
                  />
                </li>
                <li>
                  <p className="section2-service">Search Engine Optimization</p>
                </li>
                <li>
                  <p>Create a Professional Design & Feel for Your Brand</p>
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
                  <p className="section2-service">
                    Copywriting & Story Telling
                  </p>
                </li>
                <li>
                  <p>Professional Design & Feel</p>
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
                  <p className="section2-service">
                    Website Design & Development
                  </p>
                </li>
                <li>
                  <p>Professional Design & Feel</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
