import React, { Component } from 'react';

import Aux from './hoc/Aux/Aux';
import Profile from './components/Profile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null
    }
  }

  componentDidMount() {
    let userApiUrl = `${process.env.REACT_APP_API_URL}/user-service/`;
    let email = 'contact@aaronlewis.dev';
    let password = 'sillygoose';
    fetch(userApiUrl, {
      method: 'GET',
      headers: {
        "email": email,
        "password": password
      }
    })
    .then(response => {
        return response.json();
      }).then(data => {
        this.setState((prevState, props) => {
          const fetchedId = data.userId;
          console.log(`User ID retrieved for user with email ${email}` );
          return { userId: fetchedId };
        });
        console.log(data);
      }).catch(err => {
        console.log(err);
        console.log("Error fetching user id");
      })
  }

  render() {
    return (
      <Aux>
        <Profile userId={this.state.userId}></Profile>
      </Aux>
    );
  }
}

export default App;
