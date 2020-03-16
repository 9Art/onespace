import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Formpage from "./pages/Formpage";

function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/form">
            <Formpage />
          </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
