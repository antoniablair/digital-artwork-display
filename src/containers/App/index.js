import React from "react";
import { Switch, Route } from "react-router-dom";

import Instructions from "../InstructionsPage";
import Nav from "../../components/Nav";
import PlayerPage from "../PlayerPage";
import Slideshows from "../SlideshowsPage";

/**
 * Routes
 */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { slideshowsPublishedStatuses: [true, false]};
    this.showPublishedStatuses = this.showPublishedStatuses.bind(this);
    this.showAllStatuses = this.showAllStatuses.bind(this);
  }

  showPublishedStatuses = () => (
    this.setState({ slideshowPublishedStatuses: [true] })
  )

  showAllStatuses = () => (
    this.setState({ slideshowPublishedStatuses: [true, false] })
  )

  render() {
    return (
      <div className="App">
        <Nav
          showPublishedStatuses={this.showPublishedStatuses}
          showAllStatuses={this.showAllStatuses} />
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