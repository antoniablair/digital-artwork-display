import React from "react";
import { Link } from "react-router-dom";

import ImageNotAvailable from "../../assets/noImage.jpg";
import { SlideshowPropTypes } from "../../lib/proptypes.js";

import "./preview.css";

/**
 * Preview mode for slideshow 
 * @param {slideshow} Slideshow
 * 
 * Todo: Update to show more of the reel in preview
 */

const SlideshowPreview = ({ slideshow }) => {
  let previewImage = ImageNotAvailable;
  let alt = "No image available";
  const publishedArtworks = slideshow.artworks && slideshow.artworks.filter(a => a.published === true);

  if (publishedArtworks) {
    let piece = publishedArtworks[0];
    if (piece.media) {
      previewImage = process.env.REACT_APP_BACKEND_URL + piece.media.url;
      if (piece.media.alternativeText) {
        alt = piece.media.alternativeText;
      }
    }
  } 

  return (
    <>
    <Link to={`/slideshow/${slideshow.id}`}>
      <div className="preview">
        <img
          src={previewImage}
          alt={alt}
        />
        <p>{slideshow.name || "Untitled"}</p>
      </div>
      </Link>
    </>
    );
};

SlideshowPreview.propTypes = {
  slideshow: SlideshowPropTypes
}


export default SlideshowPreview;

  