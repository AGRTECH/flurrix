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
                  <p className="section2pricing-titles">Basic</p>
                </li>
                <li>
                  <p className="section2pricing-subtitle">
                    Everything you need to completely revamp your brand
                  </p>
                </li>
                <li className="section2pricing-crossoutpricelist">
                  <div className="section2pricing-crossout"></div>
                  <p className="section2pricing-blurredprice">$99</p>
                </li>
                <li className="section2pricing-pricelist">
                  <p className="section2pricing-usd">USD</p>
                  <p className="section2pricing-dollarsign">&nbsp;$</p>
                  <p className="section2pricing-price">29</p>
                  <p className="section2pricing-month">/mo</p>
                </li>
                <li>
                  <p className="section2pricing-subtext">First month 70% off</p>
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
                  <p>SEO & CRO</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={security} className="section2pricing-img" alt="" />
                  <p>Hosting & Security</p>
                </li>
                <li>
                  <button className="home-button2">Try for 70% Off</button>
                </li>
              </ul>
            </div>
            <div className="section2pricing-card">
              <ul className="section2pricing-list">
                <li>
                  <p className="section2pricing-titles">Webscaper</p>
                </li>
                <li>
                  <p className="section2pricing-subtitle">
                    Become a webscaper with more pages and lead generating tools
                  </p>
                </li>
                <li className="section2pricing-crossoutpricelist">
                  <div className="section2pricing-crossout"></div>
                  <p className="section2pricing-blurredprice">$229</p>
                </li>
                <li className="section2pricing-pricelist">
                  <p className="section2pricing-usd">USD</p>
                  <p className="section2pricing-dollarsign">&nbsp;$</p>
                  <p className="section2pricing-price">69</p>
                  <p className="section2pricing-month">/mo</p>
                </li>
                <li>
                  <p className="section2pricing-subtext">First month 70% off</p>
                </li>
                <li>
                  <div className="section2pricing-divider"></div>
                </li>
                <li className="section2pricing-benefit">
                  <img src={page} className="section2pricing-img" alt="" />
                  <p>All Basic Features</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={page} className="section2pricing-img" alt="" />
                  <p>Up to 10 Pages</p>
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
                  <p>SEO & CRO</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={security} className="section2pricing-img" alt="" />
                  <p>Hosting & Security</p>
                </li>
                <li>
                  <button className="home-button">Try for 70% Off</button>
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
                  <p className="section2pricing-blurredprice">$599</p>
                </li>
                <li className="section2pricing-pricelist">
                  <p className="section2pricing-usd">USD</p>
                  <p className="section2pricing-dollarsign">&nbsp;$</p>
                  <p className="section2pricing-price">179</p>
                  <p className="section2pricing-month">/mo</p>
                </li>
                <li>
                  <p className="section2pricing-subtext">First month 70% off</p>
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
                  <p>Pro Custom Design</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={update} className="section2pricing-img" alt="" />
                  <p>Unlimited Updates</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={seo} className="section2pricing-img" alt="" />
                  <p>SEO & CRO</p>
                </li>
                <li className="section2pricing-benefit">
                  <img src={security} className="section2pricing-img" alt="" />
                  <p>Hosting & Security</p>
                </li>
                <li>
                  <button className="home-button">Try for 70% Off</button>
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
