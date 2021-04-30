import React, { Component } from 'react';

import Aux from './hoc/Aux/Aux';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <Aux>
        <Profile></Profile>
      </Aux>
    );
  }
}

export default App;
