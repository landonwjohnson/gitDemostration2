import React, { Component } from 'react';
import Alex from './alex'
import Josh from './josh'
 class App extends Component {
  render() {
    return (
      <div>
        <h1>React simple starter</h1>
          <Alex />
          <Josh/>
      </div>
    );
  }
}

export default App
