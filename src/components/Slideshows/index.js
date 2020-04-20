import React from "react";

import Preview from "./preview";

import "./slideshows.css";

const Slideshows = ({ slideshows }) => {
  return (
    <div>
      <h1>Slideshows</h1>
      <div className="slideshows">
        {slideshows.map((slideshow, i) => {
          return <Preview slideshow={slideshow} key={`slideshow__${slideshow.id}`} />;
        })}
      </div>
    </div>
  );
};

export default Slideshows;