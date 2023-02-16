import React, { useState } from "react";
import strategy from "../img/plan.jpg";
import design from "../img/onboard.jpg";
import development from "../img/develop.jpg";
import maintenance from "../img/revise.jpg";
import launch from "../img/launch.jpg";
import maintain from "../img/maintain.jpg";

const Section5 = () => {
  const [strategyFocus, setStrategyFocus] = useState(false);
  const [designFocus, setDesignFocus] = useState(false);
  const [developmentFocus, setDevelopmentFocus] = useState(false);
  const [maintenanceFocus, setMaintenanceFocus] = useState(false);
  const [launchFocus, setLaunchFocus] = useState(false);
  const [maintainFocus, setMaintainFocus] = useState(false);

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
  const handlelaunchFocus = () => {
    setLaunchFocus(true);
  };

  const handlelaunchBlur = () => {
    setLaunchFocus(false);
  };
  const handlemaintainFocus = () => {
    setMaintainFocus(true);
  };

  const handlemaintainBlur = () => {
    setMaintainFocus(false);
  };
  return (
    <div className="section5-background">
      <div className="section5-container">
        <h1 className="section5-title">Our Process</h1>
        <h3 className="section5-subtitle">
          The goal of every website is to turn web visitors into paying
          customers. Our primary focus is to create a powerful user experience.
          In order to achieve this, we break our projects into 4 phases.
        </h3>
        <div>
          <button
            autoFocus
            onFocus={handleStrategyFocus}
            onBlur={handleStrategyBlur}
            className="section5-strategybtn"
          >
            1. Plan
          </button>
          <button
            onFocus={handledesignFocus}
            onBlur={handledesignBlur}
            className="section5-designbtn"
          >
            2. Onboard
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
            4. Revise
          </button>
          <button
            onFocus={handlelaunchFocus}
            onBlur={handlelaunchBlur}
            className="section5-launchbtn"
          >
            5. Launch
          </button>
          <button
            onFocus={handlemaintainFocus}
            onBlur={handlemaintainBlur}
            className="section5-maintainbtn"
          >
            6. Maintenance
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
              <p className="section5-contenttitle">Plan</p>
              <p>
                Choose one our different plans starting at $99/month that best
                suites your needs.
              </p>
              <p>
                We’ll discuss your business goals, sales & marketing strategy,
                business challenges, and core competencies in order to better
                understand your brand identity and competition.{" "}
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
              <p className="section5-contenttitle">Onboard</p>
              <p>
                After choosing a plan, you will be asked a series of questions
                to get your site tuned the exact way that you like.
              </p>
              <p>
                The questions will be along the lines of asking for some
                pictures you've taken of your work, brand logo, any content
                ideas you have for us and more.
              </p>
              <p>
                All together, the process will only take up to 10 minutes and is
                very simple and straightforward.
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
              <p className="section5-contenttitle">Development</p>
              <p>
                With completely custom components, we will whip your website
                together in 1-3 weeks (depending on how large your site is).
              </p>
              <p>
                Modern styles, layout, animations and more will put you far
                ahead of the competition in your area and will attract more
                customers!
              </p>
              <p></p>
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
              <p className="section5-contenttitle">Revise</p>
              <p>
                This is where you will get to check out your new website for the
                first time!
              </p>
              <p>
                We also have a variety of trusted partners who can assist with
                social media marketing, advertising, PPC, search engine
                optimization (SEO), video production, & content marketing.
              </p>
              <p>
                Our monthly service also include performance monitoring where we
                can provide data reports to help with optimization. Our goal is
                to be a long-term web partner to customers and provide top-notch
                service to businesses.
              </p>
            </div>
          </div>
          <div
            className={
              launchFocus
                ? "section5-launch-text"
                : "section5-launch-text-hidden"
            }
          >
            <img src={launch} className="section5-img" alt="" />
            <div className="section5-contentcontainer">
              <p className="section5-contenttitle">Launch</p>
              <p>
                Unfortunately, website security is a significant issue. Our
                maintenance & security service is the best way to protect your
                online presence.
              </p>
              <p>
                We also have a variety of trusted partners who can assist with
                social media marketing, advertising, PPC, search engine
                optimization (SEO), video production, & content marketing.
              </p>
              <p>
                Our monthly service also include performance monitoring where we
                can provide data reports to help with optimization. Our goal is
                to be a long-term web partner to customers and provide top-notch
                service to businesses.
              </p>
            </div>
          </div>
          <div
            className={
              maintainFocus
                ? "section5-maintain-text"
                : "section5-maintain-text-hidden"
            }
          >
            <img src={maintain} className="section5-img" alt="" />
            <div className="section5-contentcontainer">
              <p className="section5-contenttitle">Maintenance</p>
              <p>
                Unfortunately, website security is a significant issue. Our
                maintenance & security service is the best way to protect your
                online presence.
              </p>
              <p>
                We also have a variety of trusted partners who can assist with
                social media marketing, advertising, PPC, search engine
                optimization (SEO), video production, & content marketing.
              </p>
              <p>
                Our monthly service also include performance monitoring where we
                can provide data reports to help with optimization. Our goal is
                to be a long-term web partner to customers and provide top-notch
                service to businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
