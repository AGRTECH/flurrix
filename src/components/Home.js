import React from "react";
import plumberbg from "../img/landscapinglandingbg1.jpg";
import paintbrush from "../img/greenpaintbrush.png";
import greengears from "../img/greengears.png";
import greenlock from "../img/greenlock.png";
import greenbook from "../img/greenbook.png";
import greenbars from "../img/greenbars.png";
import mowingicon from "../img/lawnmowingicon.png";
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
                  <p className="section2-service">
                    Website Design & Development
                  </p>
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
                  <p className="section2-service">
                    Coversion Rate Optimization
                  </p>
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
                  <p className="section2-service">
                    Copywriting & Story Telling
                  </p>
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
        <div className="section3-mowingicon">
          <div style={{ padding: "42px" }}></div>
        </div>
        <div className="section3-backgroundimg">
          <div className="section3-container">
            <p className="section3-title">Mow Down the Competition</p>
            <p className="section3-subtitle">
              Around 85% of landscaping company sites we've anaylized either
              don't have a website at all or have a severly outdated one. We can
              help you advance to the next level and start converting more site
              visitors into clients
            </p>
            <button className="section3-button">Get a site</button>
          </div>
        </div>
        <div className="section4-background">
          <p className="section2-title">Our Work</p>
          <p className="section2-subtitle">
            Companies we've helped e-
            <span className="section2-italic">scape</span> from low quality
            sites
          </p>
          <div className="section4-container">
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
                    <p className="section2-service">
                      Coversion Rate Optimization
                    </p>
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
          </div>
        </div>
        <div className="section5-background">{/* Process */}</div>
        <div className="section6-background">
          {/* History (I was a power washer and noticed that most had outdated sites) */}
        </div>
        <div className="section7-background">{/* Optional Blog */}</div>
        <div className="section8-background">
          {/* Pricing / contact form */}
        </div>
        <div className="section9-background">{/* Footer */}</div>
      </div>
    </div>
  );
};

export default Home;
