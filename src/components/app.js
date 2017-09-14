import React, { Component } from 'react';
import Alex from './alex'
import Jared from './jared'

 class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
          <Alex />
          <Jared />
      </div>
    );
  }
}

export default App
