import React from "react";
import herculesfullsite from "../img/herculesfullscreen2.png";

const Section2Project1 = () => {
  return (
    <div className="section2project1-background">
      <div className="section2project1-container">
        <div className="section2project1-textcontainer">
          <div className="section2project1-section">
            <h1>Design Strategy</h1>
            <p>
              With all web design, you should have opt for 1 accented color +
              black and white as the main colors of your website. In some cases,
              you can have 2 accented colors, but normally just 1 and it will be
              whatever color is associated with your brand. The premise behind
              the feel of the website is water themed for power washing. The
              waves in the background and the blue accent and backgrounds
              throughout give a relevant feel to the power washing industry.
            </p>
          </div>
          <div className="section2project1-section">
            <h1>Sales Optimized Layout</h1>
            <p>
              There are a few tactics we always go for when optimizing for sales
              on our websites.
              <br />
              While scrolling through, the "get quote" button and the call now
              button will always easily accesible as it will be right on the top
              of the screen at all times.
              <br />
              Another tactic is having many deliberately placed CTAs (call to
              actions) throughout the website so that at all times the user be
              prompted with an option for a free quote in the content of the
              page as well as the navigation bar up top.
              <br />
              The website is also covered with "trust indicators" such as the 5
              cards near the bottom of the page with things like "licensed &
              insured" and "trained & vetted staff" showing that your company is
              one to trust. The review section is a must have on every site and
              does an excellent job proving social proof that you can get the
              job done.
            </p>
          </div>
          <div className="section2project1-section">
            <h1>Before And After</h1>
            <p>
              This website and many of our websites (if it makes sense) comes
              with an interactive before and after slider. This will show
              potential customers how big of an impact you can make on their
              home in the most aesthetically pleasing way. This method is miles
              better than just putting the pictures side by side or even showing
              no before and afters at all.
            </p>
          </div>
          <div className="section2project1-section">
            <h1>On-Page SEO</h1>
            <p>
              We make sure to always do everything in our power to optimize your
              On-page SEO (search engine optimization) so that you will get as
              much traffic as possible coming in. This includes things like
              using appropriate keywords relevant to your niche throughout the
              site, crushing images so that their size is smaller creating
              faster load times, adding relevant alt tags to your photos and
              many more tactics that will be a very nice starting point for your
              pages ranking!
            </p>
          </div>
          <div className="section2project1-section">
            <h1>Pop-Up Lead Capture</h1>
            <p>
              With the Premium Plan & Up, you have the option to have a pop-up
              on your website when users are showing exit intent, have scrolled
              a certain amount, or if they have spent a specified amount of time
              on your site. What this means is that the visitor will be prompted
              with a popup when they fulfill one of the previously mentioned
              criteria. The pop-up will give them some sort of offer such as 10%
              off your services if they act now. This is a very effective way to
              capture more leads that were right on the tipping point of
              becoming a customer.
            </p>
          </div>
          <div className="section2project1-section">
            <h1>Mobile & Speed Optimized</h1>
            <p>
              Most internet traffic nowadays (60%+) in coming from mobile
              devices. This is why it's more important than ever that your
              website is fully optimized for all devices. Not only that, but how
              fast your page loads can have a severe impact on your conversions.
              The difference between loading almost instantly and a 5+ second
              delay is massive especially with the shorter attention spans of
              many people now in 2023. Speed and mobile optimization also is a
              major contributor for your on-page SEO as well. So this is a very
              important thing that we always make sure is optimized to the
              fullest when creating a website.
            </p>
          </div>
        </div>
        <div className="section2project1-picturecontainer">
          <img
            className="section2project1-sitephoto"
            src={herculesfullsite}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Section2Project1;
