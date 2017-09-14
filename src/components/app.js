import React, { Component } from 'react';
import Alex from './alex'
import Paola from './Paola'

import Josh from './josh'
 class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
          <Alex />
          <Paola/>
          <Josh/>
      </div>
    );
  }
}

export default App
