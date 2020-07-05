import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div id="header">
      <h1>Peter Liu</h1>
      <p>Web dev, designer, real go-getter</p>
      <nav>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
