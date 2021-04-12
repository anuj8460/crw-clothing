import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.componet";
import Header from "./components/header/header.component";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Switch>
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
