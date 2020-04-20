import React from "react";
import { Link } from "react-router-dom";


const Nav = () => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/">Slideshows</Link>
            </li>
            <li>
              <Link to="/instructions">Instructions</Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <a href="mailto:antoniablair@gmail.com">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav; 