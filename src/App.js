import React from "react";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop/shop.componet";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utlis";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }
  unsubcribeFromAuth = null;
  componentDidMount() {
    this.unsubcribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }
  componentWillUnmount() {
    this.unsubcribeFromAuth();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={SignInAndSignUpPage} />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
