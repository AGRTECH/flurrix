import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import styled from "styled-components";
import { Button, Navbar, Dropdown } from "react-bootstrap";

const Ul = styled.ul`
  @media (max-width: 1090px) {
    flex-direction: column;
    background-color: rgb(38, 0, 87);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 100px;
    overflow-x: hidden;

    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
`;

const HamburgerNav = ({ open }) => {
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
    // className={sticky ? "sticky" : "nav-container"}
    <Navbar>
      <div></div>
      <Ul
        // style={{
        //   transform: open ? "translateX(0)" : "translateX(100%)",
        // }}
        className={`nav-navlist`}
        open={open}
      >
        <div className="nav-lidiv">
          <li>
            <Link className="nav-process" to={"/process"}>
              The Process
            </Link>
          </li>
          <li>
            <Link className="nav-work" to={"/work"}>
              Portfolio
            </Link>
          </li>

          <li>
            <Link className="nav-pricing" to={"/pricing"}>
              Pricing
            </Link>
          </li>
          <li>
            <Link className="nav-contact" to={"/contact"}>
              Contact
            </Link>
          </li>
        </div>
        <li>
          <button className={"nav-button"}>
            {" "}
            <a className="nav-item" href="tel:(586) 651-6917">
              (586) 651-6917
            </a>
          </button>{" "}
        </li>
        <li>
          <Link className="nav-item" to={"/contact"}>
            <button className={"nav-button"}>Get Started</button>
          </Link>
        </li>
      </Ul>
    </Navbar>
  );
};

export default HamburgerNav;
