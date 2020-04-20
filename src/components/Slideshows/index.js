import React from "react";

import SlideshowPreview from "./slideshowPreview";

import "./slideshows.css";

const Slideshows = ({ slideshows }) => {
  return (
    <div>
      <h1>Slideshows</h1>
      <div className="slideshows">
        {slideshows.map((slideshow, i) => {
          return <SlideshowPreview slideshow={slideshow} key={`slideshow__${slideshow.id}`} />;
        })}
      </div>
    </div>
  );
};

export default Slideshows;