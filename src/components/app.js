import React, { Component } from 'react';
import Alex from './alex'
import Paola from './Paola'
import Jared from './jared'
import Josh from './josh'

 class App extends Component {
  render() {
    return (
      <div>
        <h1>React Simple Starter</h1>
          <Alex />

          <Paola/>

          <Jared />

          <Josh/>
      </div>
    );
  }
}

export default App
