import React, { useState, useEffect } from "react";
import Hamburger from "./Hamburger";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import logo from "../img/flurrixwhite.jpg";

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
          <Link to={"/home"}>
            <img src={logo} className="nav-logo" alt="Logo" />
          </Link>
        </div>
        <Hamburger />
        {/* <div>
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
        </div> */}
      </div>
    </>
  );
};

export default Nav;
