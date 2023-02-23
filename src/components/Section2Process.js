import React from "react";
import strategy from "../img/plan.jpg";
import design from "../img/onboard.jpg";
import development from "../img/develop.jpg";
import maintenance from "../img/revise.jpg";
import launch from "../img/launch.jpg";
import maintain from "../img/maintain.jpg";

const Section2Process = () => {
  window.addEventListener("scroll", function () {
    var scrollTop = window.scrollY;
    if (scrollTop > 500) {
      var windowHeight = window.innerHeight;
      var documentHeight = document.documentElement.scrollHeight;
      var progress = (scrollTop - 500) / (documentHeight - windowHeight - 500);
      // Add the following line to limit the progress to 70%:
      progress = progress > 0.7 ? 0.7 : progress;
      var height = progress * 100;
      document.querySelector(".line").style.height = height + "%";
    } else {
      document.querySelector(".line").style.height = "0";
    }
  });
  return (
    <>
      <div className="section2process-container">
        <h1 className="section2process-title">
          Simple 6 Step Process to Get Your Lead Generating Machine
        </h1>
        <div class="line"></div>
        <div className="section2process-flex">
          <div className="section2process-section">
            <div className="section2process-strategy-text">
              <div className="section2process-contentcontainer">
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
              <img src={strategy} className="section2process-img" alt="" />
            </div>
          </div>
          <div className="section2process-section">
            <div className="section2process-strategy-text">
              <img src={design} className="section2process-img" alt="" />
              <div className="section2process-contentcontainer">
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
                  All together, the process will only take up to 10 minutes and
                  is very simple and straightforward.
                </p>
              </div>
            </div>
          </div>
          <div className="section2process-section"></div>
          <div className="section2process-section"></div>
          <div className="section2process-section"></div>
          <div className="section2process-section"></div>
        </div>
      </div>

      <div className="section5-development-text">
        <img src={development} className="section5-img" alt="" />
        <div className="section5-contentcontainer">
          <p className="section5-contenttitle">Development</p>
          <p>
            With completely custom components, we will whip your website
            together in 1-3 weeks (depending on how large your site is).
          </p>
          <p>
            Modern styles, layout, animations and more will put you far ahead of
            the competition in your area and will attract more customers!
          </p>
          <p></p>
        </div>
      </div>
      <div className="section5-maintenance-text">
        <img src={maintenance} className="section5-img" alt="" />
        <div className="section5-contentcontainer">
          <p className="section5-contenttitle">Revise</p>
          <p>
            This is where you will get to check out your new website for the
            first time!
          </p>
          <p>
            We also have a variety of trusted partners who can assist with
            social media marketing, advertising, PPC, search engine optimization
            (SEO), video production, & content marketing.
          </p>
          <p>
            Our monthly service also include performance monitoring where we can
            provide data reports to help with optimization. Our goal is to be a
            long-term web partner to customers and provide top-notch service to
            businesses.
          </p>
        </div>
      </div>
      <div className="section5-launch-text">
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
            social media marketing, advertising, PPC, search engine optimization
            (SEO), video production, & content marketing.
          </p>
          <p>
            Our monthly service also include performance monitoring where we can
            provide data reports to help with optimization. Our goal is to be a
            long-term web partner to customers and provide top-notch service to
            businesses.
          </p>
        </div>
      </div>
      <div className="section5-maintain-text">
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
            social media marketing, advertising, PPC, search engine optimization
            (SEO), video production, & content marketing.
          </p>
          <p>
            Our monthly service also include performance monitoring where we can
            provide data reports to help with optimization. Our goal is to be a
            long-term web partner to customers and provide top-notch service to
            businesses.
          </p>
        </div>
      </div>
    </>
  );
};

export default Section2Process;
