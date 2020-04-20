import React from "react";

import ImageNotAvailable from "../../assets/noImage.jpg";
import "./preview.css";

/**
 * Preview mode for slideshow 
 * @param {slideshow} Slideshow
 * 
 * Todo: Update to show more of the reel
 */

const SlideshowPreview = ({ slideshow }) => {
  console.log(slideshow);
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
    <div className="preview">
      <img
        src={previewImage}
        alt={alt}
      />
      <p>{slideshow.name || "Untitled"}</p>
    </div>
    );
};

export default SlideshowPreview;
  