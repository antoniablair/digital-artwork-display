import React from "react";  
import Slideshows from "../../components/Slideshows";  
import Query from "../../containers/Query";  
import GET_SLIDESHOWS_QUERY from "../../queries/slideshows/slideshows";

/**
 * Fetch all slideshows from the server
 */

const SlideshowsPage = ({ slideshowPublishedStatus }) => {  
  return (
      <div className="uk-container uk-container-large">
        <Query query={GET_SLIDESHOWS_QUERY} slideshowPublishedStatus={slideshowPublishedStatus}>
          {({ data: { slideshows } }) => {
            return <Slideshows slideshows={slideshows} />;
          }}
        </Query>
    </div>
  );
};

SlideshowsPage.propTypes = {
  slideshowPublishedStatus: Boolean
}

export default SlideshowsPage;