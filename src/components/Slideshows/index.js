import PropTypes from 'prop-types';
import React from "react";

import SlideshowPreview from "./slideshowPreview";
import SlideshowPropTypes from "../../lib/proptypes.js";

import "./slideshows.css";

/**
 * Slideshow homepage
 */

const Slideshows = ({ slideshows }) => {
  return (
    <div>
      <div className="welcome">
      <h1>Slideshows</h1>
      <h2>Select a slideshow to launch the slideshow player.</h2>
      </div>
      <div className="slideshows">
        {slideshows.map((slideshow) => {
          return <SlideshowPreview slideshow={slideshow} key={`slideshow__${slideshow.id}`} />;
        })}
      </div>
    </div>
  );
};

Slideshows.propTypes = {
  slideshows: PropTypes.arrayOf(SlideshowPropTypes)
}

export default Slideshows;
