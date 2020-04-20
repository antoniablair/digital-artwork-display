import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import SLIDESHOWS_QUERY from "../../queries/slideshows/slideshows";

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
      </nav>
    </div>
  );
};

export default Nav; 