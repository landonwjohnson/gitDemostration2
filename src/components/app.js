import React, { Component } from 'react';
import Alex from './alex'
import Jared from './jared'
import Josh from './josh'

 class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
          <Alex />
          <Jared />
          <Josh/>
      </div>
    );
  }
}

export default App
