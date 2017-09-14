import React, { Component } from 'react';
import Alex from './alex'
import Landon from './landon'

 class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
          <Alex />
          <Landon />
      </div>
    );
  }
}

export default App
