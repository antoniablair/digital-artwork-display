import React from "react";
import Query from "../Query";
import { Link } from "react-router-dom";

import SLIDESHOWS_QUERY from "../../queries/slideshow/slideshows";

const Nav = () => {
  return (
    <div>
      <Query query={SLIDESHOWS_QUERY} id={null}>
        {({ data: { slideshows } }) => {
          return (
            <div>
              <nav className="uk-navbar-container" data-uk-navbar>
                <div className="uk-navbar-left">
                  <ul className="uk-navbar-nav">
                    <li>
                      <Link to="/">Slideshows</Link>
                    </li>
                    <li>
                      <Link to="/random">Play Random</Link>
                    </li>
                    <li>
                      <Link to="/about">Instructions</Link>
                    </li>
                  </ul>
                </div>

                <div className="uk-navbar-right">
                  <ul className="uk-navbar-nav">
                    {slideshows.map((slideshow, i) => {
                      return (
                        <li key={slideshow.id}>
                          <Link
                            to={`/slideshow/${slideshow.id}`}
                            className="uk-link-reset"
                          >
                            {slideshow.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </nav>
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default Nav; 