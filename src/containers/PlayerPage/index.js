import React from "react";  
import { useParams } from "react-router";  
import Player from "../../components/Player";  
import Query from "../../containers/Query";  
import { GET_SLIDESHOW_BY_ID_QUERY } from "../../queries/slideshows/slideshows";

import "./player.css"

/**
 * Query container for the slideshow player
 */

const PlayerPage = () => {  
  let { id } = useParams();

  return (
    <Query query={GET_SLIDESHOW_BY_ID_QUERY} id={id}>
      {({ data: { slideshow } }) => {
        return (
          <div className="playerWrapper">
            <Player artworks={slideshow.artworks} key={`player__${slideshow.id}`}/>
          </div>
        );
      }}
    </Query>
  );
};

export default PlayerPage; 