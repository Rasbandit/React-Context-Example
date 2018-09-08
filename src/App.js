import React, { Component } from 'react';
import MyProvider from './Components/Provider';
import Family from './Components/Family'

import './App.css';



class App extends Component {
  state={
    name: 'todd',
    age: 100,
    cool: true
  }

  render() {
    return (
      <MyProvider>
        <div className="App">
          <p>Im the App</p>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

export default App;


