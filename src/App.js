import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Main from "./components/Main";
function App() {
  return (
    <div className="AppHome">
      <div className="title-text">
        <img className="title" src='./rickAndMortyLogo.png' alt="#" ></img>
      </div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/:page" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
