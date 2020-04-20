import React from "react";

import ImageNotAvailable from "../../assets/noImage.jpg";

const Preview = ({ slideshow }) => {
  console.log(slideshow);
  let previewImage = ImageNotAvailable;
  const publishedArtworks = slideshow.artworks && slideshow.artworks.filter(a => a.published == true);

  if (publishedArtworks) {
    previewImage = process.env.REACT_APP_BACKEND_URL + publishedArtworks[0].media.url;
  }

  return (
    <div>
      {/* add alternative text */}
      <img
        src={previewImage}
        height="100"
      />
    </div>
    );
};

const Slideshows = ({ slideshows }) => {
  //   const leftartworksCount = Math.ceil(artworks.length / 5);
  //   const leftartworks = artworks.slice(0, leftartworksCount);
  //   const rightartworks = artworks.slice(leftartworksCount, artworks.length);

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {slideshows.map((slideshow, i) => {
            return <Preview slideshow={slideshow} key={`slideshow__${slideshow.id}`} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Slideshows;