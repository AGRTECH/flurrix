import React from "react";
import stars from "../img/5stars.png";
import customer1 from "../img/customerpic1.jpg";
import customer2 from "../img/customerpic2.jpg";
import customer3 from "../img/customerpic3.jpeg";

const Reviews = () => {
  return (
    <div className="reviews-background">
      <div className="reviews-container">
        <div className="reviews-section">
          <div className="reviews-textcontainer">
            <h1 className="reviews-title">
              Hear What Others In The Service Industy Are Saying
            </h1>
            <p className="reviews-subtitle">
              {/* Add Your Name To The List Of Happy Customers */}
            </p>
          </div>
        </div>
        <div className="reviews-section">
          <div className="reviews-card">
            <h3>"Wish I Found Out About Flurrix Sooner"</h3>
            <p>
              For years I've had a website created with either wix or wordpress
              that I created myself and I didn't think I was doing anything
              wrong. I was under the mindset that you just had to get a site out
              there and didn't have to be perfect. I was wrong and didn't value
              how much more money you can make when you actually care about your
              site and Flurrix took care of it all for me.
            </p>
            <div className="reviews-reviewcontainer">
              <img src={customer1} alt="" />
              <div className="reviews-innerreviewcontainer">
                <p className="reviews-name">Justin Bratton</p>
                <p className="reviews-name2">Owner of Hercules Power Washing</p>
                <img src={stars} alt="" />
              </div>
            </div>
          </div>
          <div className="reviews-card2">
            <h3>"Made Me Realize The Power Of A Great Digital Presence"</h3>
            <p>
              I was always one to say "I don't need a good website" and "My site
              is good enough" because I thought this business wasn't really the
              type of business you market online. Alex explained to me exactly
              how and why a great site matters and opened my eyes to what can be
              achieved by going digital.
            </p>
            <div className="reviews-reviewcontainer">
              <img src={customer2} alt="" />
              <div className="reviews-innerreviewcontainer">
                <p className="reviews-name">John Ross</p>
                <p className="reviews-name2">
                  Owner of Shimmer Exterior Cleaning
                </p>
                <img src={stars} alt="" />
              </div>
            </div>
          </div>
          <div className="reviews-card3">
            <h3>"An Absolute Must Have For Home Services Businesses"</h3>
            <p>
              After going with other options that don't specifically create
              sites for services bussinesses, it's easy to see why focus
              matters. Alex and his team at Flurrix only create sites for
              services businesses and it really shows through their depth of
              knowledge of the industry. I'm very glad to have some trust people
              working to make sure my website is at it's best, thanks to
              everyone at Flurrix.
            </p>
            <div className="reviews-reviewcontainer">
              <img src={customer3} alt="" />
              <div className="reviews-innerreviewcontainer">
                <p className="reviews-name">Dan Jenkins</p>
                <p className="reviews-name2">Owner Of Horizons Landscaping</p>
                <img src={stars} alt="" />
              </div>
            </div>
          </div>
          {/* <div className="section7-card4">
            <h3>Window Cleaning in Denver CO</h3>
            <p>
              Stephen and his crew from NW Softwash were awesome! I was super
              impressed with not only the job they did soft washing my roof,
              siding and pressure washing my concrete, but the professionalism
              from start to finish. I’ve already recommended these guys to three
              neighbors. Don’t call anyone else!
            </p>
            <div className="section7-reviewcontainer">
              <img src={customer3} alt="" />
              <div className="section7-innerreviewcontainer">
                <p className="section7-name">Kim Ashton</p>
                <img src={stars} alt="" />
              </div>
            </div>
          </div> */}
          {/* <div className="section7-card5">
            <h3>Window Cleaning in Denver CO</h3>
            <p>
              Stephen and his crew from NW Softwash were awesome! I was super
              impressed with not only the job they did soft washing my roof,
              siding and pressure washing my concrete, but the professionalism
              from start to finish. I’ve already recommended these guys to three
              neighbors. Don’t call anyone else!
            </p>
            <div className="section7-reviewcontainer">
              <img src={customer3} alt="" />
              <div className="section7-innerreviewcontainer">
                <p className="section7-name">Kim Ashton</p>
                <img src={stars} alt="" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
