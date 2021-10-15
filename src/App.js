import React from "react";
import "assets/scss/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPages";
import DetailsPage from "./pages/DetailPage";
import Example from "./pages/Example";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/properties/:id" component={DetailsPage}></Route>
        <Route exact path="/example" component={Example}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
      </Router>
    </div>
  );
}

export default App;
