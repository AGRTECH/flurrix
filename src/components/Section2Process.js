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
                <p className="section5-contenttitle">Choose a Plan</p>
                <p>
                  We offer three comprehensive website design plans - Standard,
                  Premium, and Ultimate - that are tailored to meet the unique
                  needs of your business.
                </p>
                <p>
                  When you pre-pay for 3 months for any plan, you get 3
                  additional months free. All plans come with a variety of
                  features and benefits to help you drive more traffic and
                  convert more visitors into customers such as SEO, email list
                  popups, and many more benefits listed on the pricing page
                  depending on which plan you chose
                </p>
                <p></p>
              </div>
              <img src={strategy} className="section2process-img" alt="" />
            </div>
          </div>
          <div className="section2process-section">
            <div className="section2process-strategy-text">
              <img src={design} className="section2process-img2" alt="" />
              <div className="section2process-contentcontainer2">
                <p className="section5-contenttitle">Onboard</p>
                <p>
                  The onboarding process is all done digitally right here on
                  this website! When you click get started in the navigation
                  section or other various links throughout the site, you will
                  be brought to our onboarding questions.
                </p>
                <p>
                  The questions will be everything that we need to get your
                  website created asap for you. It will include questions such
                  as: "what industry are you in?" "do you have photos that you
                  would like on your site / a company logo?" and others. There
                  are about 10 total questions so all together should take only
                  5-10 minutes to complete.
                </p>
                <p>
                  Once you have agreed to our 6 month agreement terms and
                  submitted payment, we will begin working on your website! You
                  can contact us anytime via email or phone before onboarding or
                  for any questions or concerns.
                </p>
              </div>
            </div>
          </div>
          <div className="section2process-section">
            <div className="section2process-strategy-text">
              <div className="section2process-contentcontainer">
                <p className="section5-contenttitle">Development</p>
                <p>
                  With completely custom components, our flurrix design team
                  will delicently craft your website in 1-3 weeks (depending on
                  how large your site is).
                </p>
                <p>
                  With a focus on attracting new leads and converting more into
                  paying customers with several CTAs, social proof, high quality
                  before and after photos, and trustability indicators, flurrix
                  will put you far ahead of the competition in your area
                </p>
                <p></p>
              </div>
              <img src={development} className="section2process-img" alt="" />
            </div>
          </div>
          <div className="section2process-section">
            {" "}
            <div className="section2process-strategy-text">
              <img src={maintenance} className="section2process-img2" alt="" />
              <div className="section2process-contentcontainer2">
                <p className="section5-contenttitle">Revise</p>
                <p>
                  This is where you will get to check out your new website for
                  the first time!
                </p>
                <p>
                  We understand the importance of getting the website just
                  right, so we offer unlimited revisions on the initial site
                  design to ensure you're happy with the final product.
                </p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="section2process-section">
            <div className="section2process-strategy-text">
              <div className="section2process-contentcontainer">
                <p className="section5-contenttitle">Launch</p>
                <p>
                  Once you approve the final design, we will launch your new
                  website and ensure everything is working correctly.
                </p>
                <p>
                  This will be start your journey to dominate your local area
                  with an enchanged digital presence!
                </p>
                <p></p>
              </div>
              <img src={launch} className="section2process-img" alt="" />
            </div>
          </div>
          <div className="section2process-section">
            <div className="section2process-strategy-text">
              <img src={maintain} className="section2process-img2" alt="" />
              <div className="section2process-contentcontainer2">
                <p className="section5-contenttitle">Maintenance</p>
                <p>We offer unlimited maintenance with all of our plans!</p>
                <p>
                  Our team will ensure your website is running smoothly, and
                  make any necessary updates to keep your site current, secure
                  and free of vulnerabilites.
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2Process;
