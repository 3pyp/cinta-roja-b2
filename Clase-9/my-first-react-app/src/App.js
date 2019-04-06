import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <Header img="https://images.unsplash.com/photo-1553532070-9f677c9df3dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
      </div>
    );
  }
}

export default App;
