import React from "react";

import SlideshowPreview from "./slideshowPreview";

import "./slideshows.css";

/**
 * Slideshow homepage
 */

const Slideshows = ({ slideshows }) => {
  return (
    <div>
      <h1>Slideshows</h1>
      <h2>Select a slideshow to launch the slideshow player.</h2>
      <div className="slideshows">
        {slideshows.map((slideshow, i) => {
          return <SlideshowPreview slideshow={slideshow} key={`slideshow__${slideshow.id}`} />;
        })}
      </div>
    </div>
  );
};

export default Slideshows;