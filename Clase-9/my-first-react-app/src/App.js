import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Header/>
      </div>
    );
  }
}

export default App;
