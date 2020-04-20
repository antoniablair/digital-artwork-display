import React from "react";
import { Switch, Route } from "react-router-dom";

import Instructions from "../InstructionsPage";
import Nav from "../NavContainer";
import PlayerPage from "../PlayerPage";
import Slideshows from "../SlideshowsPage";

/**
 * Routes
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideshowsPublishedStatuses: [true] // can be used to make a toggle
    };
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/"
            render={(props) => (<Slideshows {...props}
            slideshowPublishedStatuses={this.state.slideshowsPublishedStatuses} />) } 
            exact />
          <Route path="/instructions" component={Instructions} exact/>
          <Route path="/slideshow/:id" component={PlayerPage} exact />
        </Switch>
      </div>
    );
  }
}

export default App;  