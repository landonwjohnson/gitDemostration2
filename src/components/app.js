import React, { Component } from 'react';
import Alex from './alex'
import Saundra from './saundra'

import Josh from './josh'
 class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
          <Alex />
          <Saundra />
          <Josh/>
      </div>
    );
  }
}

export default App
