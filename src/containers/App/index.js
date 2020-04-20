import React from "react";
// import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

import Instructions from "../../components/Instructions";
import Nav from "../../components/Nav";
import Player from "../../containers/Player";
import Slideshows from "../Slideshows";

function App() {  
  return (
    <div className="App">
      {/* <Nav /> */}
      <Switch>
        <Route path="/" component={Slideshows} exact />
        <Route path="/instructions" component={Instructions} />
        <Route path="/slideshow/:id" component={Player} exact />
      </Switch>
    </div>
  );
}

export default App;  