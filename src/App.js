import React, { Component } from "react";

import Aux from "./hoc/Aux/Aux";
import Profile from "./components/Profile/Profile";

import { Route, Switch } from "react-router-dom";
import EightPuzzle from "./components/Projects/Project/EightPuzzle/EightPuzzle";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
    };
  }

  componentDidMount() {
    let userApiUrl = `${process.env.REACT_APP_API_URL}/user-service/`;
    let email = "contact@aaronlewis.dev";
    let password = "sillygoose";
    fetch(userApiUrl, {
      method: "GET",
      headers: {
        email: email,
        password: password,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState((prevState, props) => {
          const fetchedId = data.userId;
          return { userId: fetchedId };
        });
      })
      .catch((err) => {
        console.log(err);
        console.log("Error fetching user id");
      });
  }

  render() {
    return (
      <Aux>
        <Switch>
          <Route path="/" exact>
            <Profile userId={this.state.userId} />
          </Route>
          <Route path="/projects/8-puzzle-solver">
            <EightPuzzle></EightPuzzle>
          </Route>
        </Switch>
      </Aux>
    );
  }
}

export default App;
