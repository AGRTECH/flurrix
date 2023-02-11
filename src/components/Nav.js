import React, { useState, useEffect } from "react";
import logo from "../img/Webscaperslogo.png";

const Nav = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={sticky ? "sticky" : "nav-container"}>
        <div>
          <img src={logo} className="nav-logo" alt="Logo" />
        </div>
        <div>
          <ul className="nav-navlist">
            <li>Our Work</li>
            <li>About</li>
            <li>Contact</li>
            <li>
              <button className="nav-button">Request A Quote</button>
            </li>
            <li>
              <button className="nav-button"> (586) 651-6917</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
