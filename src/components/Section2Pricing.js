import React from "react";
import page from "../img/pageicon.png";
import design from "../img/brushicon.png";
import seo from "../img/webicon.png";
import update from "../img/updateicon.png";
import security from "../img/securityicon.png";

const Section2Pricing = () => {
  return (
    <>
      <div className="section2-background">
        <div className="section2-container">
          <div className="section2pricing-toprow">
            <div className="section2pricing-card">
              <ul className="section2pricing-list">
                <li>
                  <p className="section2pricing-titles">Standard</p>
                </li>
                <li>
                  <p className="section2pricing-subtitle">
                    Everything you need to completely revamp your brand
                  </p>
                </li>
                <li className="section2pricing-crossoutpricelist">
                  <div className="section2pricing-crossout"></div>
                  <p className="section2pricing-blurredprice">$199</p>
                </li>
                <li className="section2pricing-pricelist">
                  <p className="section2pricing-usd">USD</p>
                  <p className="section2pricing-dollarsign">&nbsp;$</p>
                  <p className="section2pricing-price">139</p>
                  <p className="section2pricing-month">/mo</p>
                </li>
                <li>
                  <p className="section2pricing-subtext">
                    Buy 3 Months Get Your Next 3 Free ($600 Saved)
                  </p>
                </li>
                <li>
                  <div className="section2pricing-divider"></div>
                </li>
                <li className="section2pricing-benefit">
                  <img src={page} className="section2pricing-img" alt="" />
                  <p>Up to 5 Pages</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={design} className="section2pricing-img" alt="" />
                  <p>Pro Custom Design</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={update} className="section2pricing-img" alt="" />
                  <p>Bi-Weekly Updates</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={seo} className="section2pricing-img" alt="" />
                  <p>SEO Optimized Page</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={security} className="section2pricing-img" alt="" />
                  <p>24/7 Support</p>
                </li>
                <li>
                  <button className="home-button2">Get 3 Months Free</button>
                </li>
              </ul>
            </div>
            <div className="section2pricing-card1">
              <ul className="section2pricing-list">
                <li>
                  <div className="section2pricing-banner">
                    <p className="section2pricing-bannertext">Most popular</p>
                  </div>
                </li>
                <li>
                  <p className="section2pricing-titles">Premium</p>
                </li>
                <li>
                  <p className="section2pricing-subtitle">
                    Become a webscaper with more pages and lead generating tools
                  </p>
                </li>
                <li className="section2pricing-crossoutpricelist">
                  <div className="section2pricing-crossout"></div>
                  <p className="section2pricing-blurredprice">$299</p>
                </li>
                <li className="section2pricing-pricelist">
                  <p className="section2pricing-usd">USD</p>
                  <p className="section2pricing-dollarsign">&nbsp;$</p>
                  <p className="section2pricing-price">229</p>
                  <p className="section2pricing-month">/mo</p>
                </li>
                <li>
                  <p className="section2pricing-subtext">
                    Buy 3 Months Get Your Next 3 Free ($687 Saved)
                  </p>
                </li>
                <li>
                  <div className="section2pricing-divider"></div>
                </li>

                <li className="section2pricing-benefit">
                  <img src={page} className="section2pricing-img" alt="" />
                  <p>Up to 10 Pages</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={design} className="section2pricing-img" alt="" />
                  <p>Exit Intent Pop-Ups</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={update} className="section2pricing-img" alt="" />
                  <p>Bi-Weekly Updates</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={seo} className="section2pricing-img" alt="" />
                  <p>Email List Incentives</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={security} className="section2pricing-img" alt="" />
                  <p>24/7 Support</p>
                </li>
                <li>
                  <button className="home-button">Get 3 Months Free</button>
                </li>
              </ul>
            </div>
            <div className="section2pricing-card">
              <ul className="section2pricing-list">
                <li>
                  <p className="section2pricing-titles">Ultimate</p>
                </li>
                <li>
                  <p className="section2pricing-subtitle">
                    Get the best of the best with 24/7 support, 20 pages, and
                    unlimited updates
                  </p>
                </li>
                <li className="section2pricing-crossoutpricelist">
                  <div className="section2pricing-crossout"></div>
                  <p className="section2pricing-blurredprice">$999</p>
                </li>
                <li className="section2pricing-pricelist">
                  <p className="section2pricing-usd">USD</p>
                  <p className="section2pricing-dollarsign">&nbsp;$</p>
                  <p className="section2pricing-price">599</p>
                  <p className="section2pricing-month">/mo</p>
                </li>
                <li>
                  <p className="section2pricing-subtext">
                    {" "}
                    Buy 3 Months Get Your Next 3 Free ($600 Saved)
                  </p>
                </li>
                <li>
                  <div className="section2pricing-divider"></div>
                </li>
                <li className="section2pricing-benefit">
                  <img src={page} className="section2pricing-img" alt="" />
                  <p>Up to 20 Pages</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={design} className="section2pricing-img" alt="" />
                  <p>Ultimate Lead Capture</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={update} className="section2pricing-img" alt="" />
                  <p>Unlimited Updates</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={seo} className="section2pricing-img" alt="" />
                  <p>Email List Management</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={security} className="section2pricing-img" alt="" />
                  <p>Ultimate 24/7 Support</p>
                </li>
                <li>
                  <button className="home-button">Get 3 Months Free</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section2Pricing;
