import React from "react";  
import Card from "../Card";

const Artworks = ({ artworks }) => {  
  const leftartworksCount = Math.ceil(artworks.length / 5);
  const leftartworks = artworks.slice(0, leftartworksCount);
  const rightartworks = artworks.slice(leftartworksCount, artworks.length);

  return (
    <div>
      <div className="uk-child-width-1-2" data-uk-grid>
        <div>
          {leftartworks.map((artwork, i) => {
            return <Card artwork={artwork} key={`artwork__${artwork.id}`} />;
          })}
        </div>
        <div>
          <div className="uk-child-width-1-2@m uk-grid-match" data-uk-grid>
            {rightartworks.map((artwork, i) => {
              return <Card artwork={artwork} key={`artwork__${artwork.id}`} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artworks;