import React, { useState } from "react";
import strategy from "../img/plan.jpg";
import design from "../img/onboard.jpg";
import development from "../img/develop.jpg";
import maintenance from "../img/revise.jpg";
import launch from "../img/launch.jpg";
import maintain from "../img/maintain.jpg";

const Section5 = () => {
  const [strategyFocus, setStrategyFocus] = useState(1);
  const [designFocus, setDesignFocus] = useState(0);
  const [developmentFocus, setDevelopmentFocus] = useState(0);
  const [maintenanceFocus, setMaintenanceFocus] = useState(0);
  const [launchFocus, setLaunchFocus] = useState(0);
  const [maintainFocus, setMaintainFocus] = useState(0);

  const handleStrategyFocus = () => {
    if (strategyFocus === 1) {
      return;
    } else {
      setStrategyFocus(1);
      setDesignFocus(0);
      setDevelopmentFocus(0);
      setMaintenanceFocus(0);
      setLaunchFocus(0);
      setMaintainFocus(0);
    }
  };

  const handleStrategyBlur = () => {};

  const handledesignFocus = () => {
    if (designFocus === 1) {
      return;
    } else {
      setDesignFocus(1);
      setStrategyFocus(0);
      setDevelopmentFocus(0);
      setMaintenanceFocus(0);
      setLaunchFocus(0);
      setMaintainFocus(0);
    }
  };

  const handledesignBlur = () => {
    setDesignFocus(false);
  };
  const handledevelopmentFocus = () => {
    if (developmentFocus === 1) {
      return;
    } else {
      setDevelopmentFocus(1);
      setDesignFocus(0);
      setStrategyFocus(0);
      setMaintenanceFocus(0);
      setLaunchFocus(0);
      setMaintainFocus(0);
    }
  };

  const handledevelopmentBlur = () => {
    setDevelopmentFocus(false);
  };
  const handlemaintenanceFocus = () => {
    if (maintenanceFocus === 1) {
      return;
    } else {
      setMaintenanceFocus(1);
      setDesignFocus(0);
      setStrategyFocus(0);
      setDevelopmentFocus(0);
      setLaunchFocus(0);
      setMaintainFocus(0);
    }
  };

  const handlemaintenanceBlur = () => {
    setMaintenanceFocus(false);
  };
  const handlelaunchFocus = () => {
    if (launchFocus === 1) {
      return;
    } else {
      setLaunchFocus(1);
      setDesignFocus(0);
      setStrategyFocus(0);
      setDevelopmentFocus(0);
      setMaintenanceFocus(0);
      setMaintainFocus(0);
    }
  };

  const handlelaunchBlur = () => {
    setLaunchFocus(false);
  };
  const handlemaintainFocus = () => {
    if (maintainFocus === 1) {
      return;
    } else {
      setMaintainFocus(1);
      setDesignFocus(0);
      setStrategyFocus(0);
      setDevelopmentFocus(0);
      setMaintenanceFocus(0);
      setLaunchFocus(0);
    }
  };

  const handlemaintainBlur = () => {
    setMaintainFocus(false);
  };
  return (
    <div className="section5-background">
      <div className="section5-container">
        <h1 className="section5-title">Simple 6 Step Process</h1>
        <h3 className="section5-subtitle">
          The focus of each website is to become a sales driven machine. To get
          your own site, we break the process into 6 parts.
        </h3>
        <div>
          <button
            autoFocus
            onClick={handleStrategyFocus}
            onBlur={handleStrategyBlur}
            className="section5-strategybtn"
          >
            1. Plan
          </button>
          <button
            onClick={handledesignFocus}
            onBlur={handledesignBlur}
            className="section5-designbtn"
          >
            2. Onboard
          </button>
          <button
            onClick={handledevelopmentFocus}
            onBlur={handledevelopmentBlur}
            className="section5-developmentbtn"
          >
            3. Development
          </button>
          <button
            onClick={handlemaintenanceFocus}
            onBlur={handlemaintenanceBlur}
            className="section5-maintenancebtn"
          >
            4. Revise
          </button>
          <button
            onClick={handlelaunchFocus}
            onBlur={handlelaunchBlur}
            className="section5-launchbtn"
          >
            5. Launch
          </button>
          <button
            onClick={handlemaintainFocus}
            onBlur={handlemaintainBlur}
            className="section5-maintainbtn"
          >
            6. Maintenance
          </button>
        </div>
        <div>
          <div
            className={
              strategyFocus === 1
                ? "section5-strategy-text"
                : "section5-strategy-text-hidden"
            }
          >
            <img src={strategy} className="section5-img" alt="" />
            <div className="section5-contentcontainer">
              <p className="section5-contenttitle">Plan</p>
              <p>
                We offer three comprehensive website design plans - Standard,
                Premium, and Ultimate - that are tailored to meet the unique
                needs of your business.
              </p>
              <p>
                When you pre-pay for 3 months for any plan, you get 3 additional
                months free. All plans come with a variety of features and
                benefits to help you drive more traffic and convert more
                visitors into customers such as SEO, email list popups, and many
                more benefits listed on the pricing page depending on which plan
                you chose
              </p>
              <p></p>
            </div>
          </div>
          <div
            className={
              designFocus === 1
                ? "section5-design-text"
                : "section5-design-text-hidden"
            }
          >
            <img src={design} className="section5-img" alt="" />
            <div className="section5-contentcontainer">
              <p className="section5-contenttitle">Onboard</p>
              <p>
                The onboarding process is all done digitally right here on this
                website! When you click get started in the navigation section or
                other various links throughout the site, you will be brought to
                our onboarding questions.
              </p>
              <p>
                The questions will be everything that we need to get your
                website created asap for you. It will include questions such as:
                "what industry are you in?" "do you have photos that you would
                like on your site / a company logo?" and others. There are about
                10 total questions so all together should take only 5-10 minutes
                to complete.
              </p>
              <p>
                Once you have agreed to our 6 month agreement terms and
                submitted payment, we will begin working on your website! You
                can contact us anytime via email or phone before onboarding or
                for any questions or concerns.
              </p>
            </div>
          </div>
          <div
            className={
              developmentFocus === 1
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
              maintenanceFocus === 1
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
              launchFocus === 1
                ? "section5-launch-text"
                : "section5-launch-text-hidden"
            }
          >
            <img src={launch} className="section5-img" alt="" />
            <div className="section5-contentcontainer">
              <p className="section5-contenttitle">Launch</p>
              <p>
                Once you approve the final design, we will launch your new
                website and ensure everything is working correctly.
              </p>
              <p>
                This will be start your journey to dominate your local area with
                an enchanged digital presence!
              </p>
            </div>
          </div>
          <div
            className={
              maintainFocus === 1
                ? "section5-maintain-text"
                : "section5-maintain-text-hidden"
            }
          >
            <img src={maintain} className="section5-img" alt="" />
            <div className="section5-contentcontainer">
              <p className="section5-contenttitle">Maintenance</p>
              <p>We offer unlimited maintenance with all of our plans!</p>
              <p>
                Our team will ensure your website is running smoothly, and make
                any necessary updates to keep your site current, secure and free
                of vulnerabilites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
