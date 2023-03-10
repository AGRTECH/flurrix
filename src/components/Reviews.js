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
            <h1 className="reviews-title">What Your Neighbors Are Saying</h1>
            <p className="reviews-subtitle">
              {/* Add Your Name To The List Of Happy Customers */}
            </p>
          </div>
        </div>
        <div className="reviews-section">
          <div className="reviews-card">
            <h3>Window Cleaning in Denver CO</h3>
            <p>
              Stephen and his crew from NW Softwash were awesome! I was super
              impressed with not only the job they did soft washing my roof,
              siding and pressure washing my concrete, but the professionalism
              from start to finish. I’ve already recommended these guys to three
              neighbors. Don’t call anyone else!
            </p>
            <div className="reviews-reviewcontainer">
              <img src={customer1} alt="" />
              <div className="reviews-innerreviewcontainer">
                <p className="reviews-name">Devon Gunn</p>
                <img src={stars} alt="" />
              </div>
            </div>
          </div>
          <div className="reviews-card2">
            <h3>Window Cleaning in Denver CO</h3>
            <p>
              Stephen and his crew from NW Softwash were awesome! I was super
              impressed with not only the job they did soft washing my roof,
              siding and pressure washing my concrete, but the professionalism
              from start to finish. I’ve already recommended these guys to three
              neighbors. Don’t call anyone else!
            </p>
            <div className="reviews-reviewcontainer">
              <img src={customer2} alt="" />
              <div className="reviews-innerreviewcontainer">
                <p className="reviews-name">Walter Hayes</p>
                <img src={stars} alt="" />
              </div>
            </div>
          </div>
          <div className="reviews-card3">
            <h3>Window Cleaning in Denver CO</h3>
            <p>
              Stephen and his crew from NW Softwash were awesome! I was super
              impressed with not only the job they did soft washing my roof,
              siding and pressure washing my concrete, but the professionalism
              from start to finish. I’ve already recommended these guys to three
              neighbors. Don’t call anyone else!
            </p>
            <div className="reviews-reviewcontainer">
              <img src={customer3} alt="" />
              <div className="reviews-innerreviewcontainer">
                <p className="reviews-name">Kim Ashton</p>
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
