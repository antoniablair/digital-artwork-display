import React from "react";

import ImageNotAvailable from "../../assets/noImage.jpg";
import "./preview.css";

const Preview = ({ slideshow }) => {
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
      />
      <p>{slideshow.name || "Untitled"}</p>
    </div>
    );
};

export default Preview;
  