import React from "react";  
import { useParams } from "react-router";  
import Player from "../../components/Player";  
import Query from "../../components/Query";  
import { GET_SLIDESHOW_QUERY } from "../../queries/slideshows/slideshows";

import "./player.css"

const Category = () => {  
  let { id } = useParams();

  return (
    <Query query={GET_SLIDESHOW_QUERY} id={id}>
      {({ data: { slideshow } }) => {
        return (
          <div className="playerWrapper">
              {/* todo: add a key */}
            <Player artworks={slideshow.artworks} />
          </div>
        );
      }}
    </Query>
  );
};

export default Category; 