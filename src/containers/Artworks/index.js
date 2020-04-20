import React from "react";  
import Artworks from "../../components/Artworks";  
import Query from "../../components/Query";  
import ARTWORKS_QUERY from "../../queries/artworks/artworks";

const ArtworksWrapper = () => {  
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Query query={ARTWORKS_QUERY}>
            {({ data: { artworks } }) => {
              return <Artworks artworks={artworks} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default ArtworksWrapper;