import React from "react";  
import Slideshows from "../../components/Slideshows";  
import Query from "../../components/Query";  
import GET_SLIDESHOWS_QUERY from "../../queries/slideshows/slideshows";

/**
 * Fetch slideshows from the server
 */

const SlideshowsPage = ({ slideshowPublishedStatuses }) => {  
  console.log(slideshowPublishedStatuses)
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Query query={GET_SLIDESHOWS_QUERY} slideshowPublishedStatuses={slideshowPublishedStatuses}>
            {({ data: { slideshows } }) => {
              return <Slideshows slideshows={slideshows} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default SlideshowsPage;