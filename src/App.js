import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/shop/hats" component={HatsPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
