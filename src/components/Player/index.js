import React from "react";

import Flickity from "react-flickity-component";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import "./player.css";

// const flickityOptions = {
//   initialIndex: 2,
//   autoPlay: 3000,
//   fullscreen: true
// }

const Player = ({ artworks }) => {
  return (
    <Carousel
      autoplay={true}
      swipeable={true}
      useKeyboardArrows={true}
      infiniteLoop={true}
      showArrows={false}
      showIndicators={false}
      showThumbs={false}
    >
      {artworks.map(artwork => (
        <img
          src={process.env.REACT_APP_BACKEND_URL + artwork.media.url}
          alt={artwork.media.alternativeText || artwork.name}
        />))}
    </Carousel>
  )
}

export default Player;