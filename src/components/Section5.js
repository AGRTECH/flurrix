import React, { useState } from "react";
import strategy from "../img/strategy.png";
import design from "../img/design.png";
import development from "../img/development.png";
import maintenance from "../img/maintenance.png";

const Section5 = () => {
  const [strategyFocus, setStrategyFocus] = useState(false);
  const [designFocus, setDesignFocus] = useState(false);
  const [developmentFocus, setDevelopmentFocus] = useState(false);
  const [maintenanceFocus, setMaintenanceFocus] = useState(false);

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
                Strategy is the foundation of our projects. Our research into
                the roles of your web visitors allows us to create a website
                that delivers results.{" "}
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
              <p className="section5-contenttitle">Design</p>
              <p>
                Our custom design approach has distinct advantages. Our web
                designers are fully versed in graphic design, mobile-wise
                design, user interface (UI), and user experience (UX) - the use
                of visual elements & graphics to create an engaging site
                experience.
              </p>
              <p>
                We’ll discuss your vision for the site and generate fresh ideas
                by looking at current design and inspirational sites.
              </p>
              <p>
                Through an iterative design process, we’ll create unique mockups
                and designs for each wireframe while integrating your business’
                logo design and branding style guidelines.
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
                With custom, modern web design, your site can grow with your
                business. WordPress is the most popular content management
                system (CMS) in the world and it offers some significant SEO
                benefits.
              </p>
              <p>
                We have 10+ years of WordPress experience & deep knowledge of
                performance, security, and data privacy best practices. We also
                have expertise in building high-quality, WooCommerce ecommerce
                sites.
              </p>
              <p>
                Prior to the launch of the new website, our team will go through
                an in-depth Quality Control & Quality Assurance process and
                provide site specific WordPress training sessions.
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
