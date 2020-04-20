import React from "react";  
import { Link } from "react-router-dom";

const Card = ({ artwork }) => {  
  return (
    <Link to={`/artwork/${artwork.id}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={process.env.REACT_APP_BACKEND_URL + artwork.media.url}
            alt={artwork.media.alternativeText}
            height="100"
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {artwork.creator}
          </p>
          <p id="title" className="uk-text-large">
            {artwork.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card; 