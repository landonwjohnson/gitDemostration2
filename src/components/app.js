import React, { Component } from 'react';
import Alex from './alex'
import Saundra from './saundra'

import Landon from './landon'
import Paola from './Paola'
import Jared from './jared'
import Josh from './josh'

 class App extends Component {
  render() {
    return (
      <div>
        <h1>React Simple Starter</h1>
          <Alex />
          <Saundra />
          <Landon />
          <Paola/>
          <Jared />
          <Josh/>
      </div>
    );
  }
}

export default App
