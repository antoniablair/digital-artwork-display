import React from "react";  
import Slideshows from "../../components/Slideshows";  
import Query from "../../components/Query";  
import SLIDESHOWS_QUERY from "../../queries/slideshows/slideshows";

const SlideshowsWrapper = () => {  
  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <Query query={SLIDESHOWS_QUERY}>
            {({ data: { slideshows } }) => {
              return <Slideshows slideshows={slideshows} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default SlideshowsWrapper;