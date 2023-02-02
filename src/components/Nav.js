import React from "react";
// import logo from "../img/mainlinelogotransparent.png";

const Nav = () => {
  return (
    <>
      <div className="nav-container">
        <div>
          <img src="" className="nav-logo" alt="Logo" />
        </div>
        <div>
          <ul className="nav-navlist">
            <li>Sites</li>
            <li>About</li>
            <li>
              <button className="nav-button"> Get a site</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
