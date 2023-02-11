import React, { useState } from "react";
import ProcessTabs from "./ProcessTabs";
import plumberbg from "../img/landscapinglandingbg1.jpg";
import logo from "../img/Webscaperslogo.png";
// import landscapingbg from "../img/landscapehomebg2.jpg";
import landscapingbg from "../img/cutbg7.jpg";
import paintbrush from "../img/greenbrush.png";
import greengears from "../img/greengears.png";
import greenlock from "../img/greenlock.png";
import greenbook from "../img/greenbook.png";
import greenbars from "../img/greenbars.png";
import mowingicon from "../img/lawnmowingicon.png";
import computerviewing from "../img/computerscreenviewing.png";
import greencheckmark from "../img/greencheckmark.png";
import strategy from "../img/strategy.png";
import siteone from "../img/herculespowerwashing1.jpg";
import design from "../img/design.png";
import development from "../img/development.png";
import maintenance from "../img/maintenance.png";
import contactbg from "../img/contactbg2.jpg";
import bushes from "../img/catoonbush3.png";
import palm from "../img/cartoonpalmm.png";
import { Form, Button } from "react-bootstrap";

// Model off of tinyfrog.com

const Home = () => {
  const [strategyFocus, setStrategyFocus] = useState(false);
  const [designFocus, setDesignFocus] = useState(false);
  const [developmentFocus, setDevelopmentFocus] = useState(false);
  const [maintenanceFocus, setMaintenanceFocus] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleStrategyFocus = () => {
    setStrategyFocus(true);
  };

  const handleStrategyBlur = () => {
    setStrategyFocus(false);
  };

  const handledesignFocus = () => {
    setDesignFocus(true);
  };

  const handledesignBlur = () => {
    setDesignFocus(false);
  };
  const handledevelopmentFocus = () => {
    setDevelopmentFocus(true);
  };

  const handledevelopmentBlur = () => {
    setDevelopmentFocus(false);
  };
  const handlemaintenanceFocus = () => {
    setMaintenanceFocus(true);
  };

  const handlemaintenanceBlur = () => {
    setMaintenanceFocus(false);
  };

  return (
    <div>
      <div className="home-container">
        <p className="home-firstline">Websites ONLY for Landscapers</p>
        <p className="home-secondline">
          Helping Landscapers connect to new clients in an evolving digital age
        </p>
        <button className="home-button">Get a site</button>
        <img src={landscapingbg} className="plumber-bg" alt="" />
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
              <div className="section4-cardtextcontainer">
                <div className="section4-card">
                  <img src={siteone} className="section4-img" alt="" />
                  <button className="section4-btn">View Project</button>
                  {/* <ul className="section2-list">
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
                  </ul> */}
                </div>
                <p>Hello</p>
              </div>
              <div className="section4-cardtextcontainer">
                <div className="section4-card">
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
                <p>Hello</p>
              </div>
              <div className="section4-cardtextcontainer">
                <div className="section4-card">
                  <ul className="section2-list">
                    <li>
                      <img
                        src={greenlock}
                        className="section2-lockimg"
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
                <p>Hello</p>
              </div>
            </div>
            <img src={bushes} className="section4-bush" alt="" />
            <img src={palm} className="section4-bush2" alt="" />
          </div>
        </div>
        <div className="section5-background">
          <div className="section5-container">
            <div>
              <button
                onFocus={handleStrategyFocus}
                onBlur={handleStrategyBlur}
                className="section5-strategybtn"
              >
                1. Strategy
              </button>
              <button
                onFocus={handledesignFocus}
                onBlur={handledesignBlur}
                className="section5-designbtn"
              >
                2. Design
              </button>
              <button
                onFocus={handledevelopmentFocus}
                onBlur={handledevelopmentBlur}
                className="section5-developmentbtn"
              >
                3. Development
              </button>
              <button
                onFocus={handlemaintenanceFocus}
                onBlur={handlemaintenanceBlur}
                className="section5-maintenancebtn"
              >
                4. Maintenance
              </button>
            </div>
            <div>
              <div
                className={
                  strategyFocus
                    ? "section5-strategy-text"
                    : "section5-strategy-text-hidden"
                }
              >
                <img src={strategy} className="section5-img" alt="" />
                <div className="section5-contentcontainer">
                  <p className="section5-contenttitle">Strategy</p>
                  <p>
                    Strategy is the foundation of our projects. Our research
                    into the roles of your web visitors allows us to create a
                    website that delivers results.{" "}
                  </p>
                  <p>
                    We’ll discuss your business goals, sales & marketing
                    strategy, business challenges, and core competencies in
                    order to better understand your brand identity and
                    competition.{" "}
                  </p>
                  <p>
                    All of this information allows us to then effectively draft
                    wireframes, key messaging, and information architecture.
                  </p>
                </div>
              </div>
              <div
                className={
                  designFocus
                    ? "section5-design-text"
                    : "section5-design-text-hidden"
                }
              >
                <img src={design} className="section5-img" alt="" />
                <div className="section5-contentcontainer">
                  <p className="section5-contenttitle">Strategy</p>
                  <p>
                    Our custom design approach has distinct advantages. Our web
                    designers are fully versed in graphic design, mobile-wise
                    design, user interface (UI), and user experience (UX) - the
                    use of visual elements & graphics to create an engaging site
                    experience.
                  </p>
                  <p>
                    We’ll discuss your vision for the site and generate fresh
                    ideas by looking at current design and inspirational sites.
                  </p>
                  <p>
                    Through an iterative design process, we’ll create unique
                    mockups and designs for each wireframe while integrating
                    your business’ logo design and branding style guidelines.
                  </p>
                </div>
              </div>
              <div
                className={
                  developmentFocus
                    ? "section5-development-text"
                    : "section5-development-text-hidden"
                }
              >
                <img src={development} className="section5-img" alt="" />
                <div className="section5-contentcontainer">
                  <p className="section5-contenttitle">Strategy</p>
                  <p>
                    With custom, modern web design, your site can grow with your
                    business. WordPress is the most popular content management
                    system (CMS) in the world and it offers some significant SEO
                    benefits.
                  </p>
                  <p>
                    We have 10+ years of WordPress experience & deep knowledge
                    of performance, security, and data privacy best practices.
                    We also have expertise in building high-quality, WooCommerce
                    ecommerce sites.
                  </p>
                  <p>
                    Prior to the launch of the new website, our team will go
                    through an in-depth Quality Control & Quality Assurance
                    process and provide site specific WordPress training
                    sessions.
                  </p>
                </div>
              </div>
              <div
                className={
                  maintenanceFocus
                    ? "section5-maintenance-text"
                    : "section5-maintenance-text-hidden"
                }
              >
                <img src={maintenance} className="section5-img" alt="" />
                <div className="section5-contentcontainer">
                  <p className="section5-contenttitle">Strategy</p>
                  <p>
                    Unfortunately, website security is a significant issue. Our
                    maintenance & security service is the best way to protect
                    your online presence.
                  </p>
                  <p>
                    We also have a variety of trusted partners who can assist
                    with social media marketing, advertising, PPC, search engine
                    optimization (SEO), video production, & content marketing.
                  </p>
                  <p>
                    Our monthly service also include performance monitoring
                    where we can provide data reports to help with optimization.
                    Our goal is to be a long-term web partner to customers and
                    provide top-notch service to businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="section6-background"> */}
        {/* History (I was a power washer and noticed that most had outdated sites) */}
        {/* </div> */}
        {/* <div className="section7-background">Optional Blog</div> */}
        <div className="section6-background">
          <div className="section6-container">
            <div className="section6-contactcta">
              <p className="section6-boldtext">Contact Us</p>
              <p className="section6-subtext">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia quod totam, quam voluptatem quae quasi voluptate
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
        <div className="section7-background">
          <div className="section7-container">
            <div className="section7-sections">
              <img src={logo} className="section7-logo" alt="" />
              <p className="section7-about">
                Webscapers are a web design company focused on making conversion
                optimized sites for local lanscaping businesses
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
              © 2023 Webscaper. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
