import React from "react";

const Navbar = () => {


  return (
    <div className="navbar">
      <div className="left-sec">
        <h1>
          <i className="ri-shining-2-fill"></i>Wizard
        </h1>
      </div>

      <div className="right-sec">
        <ul>
          <li>About us</li>
          <li>Services</li>
          <li>Use cases</li>
          <li>Pricing</li>
          <li>Blog</li>


          <li>
            <button>Request a quote</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
