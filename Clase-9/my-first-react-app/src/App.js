import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route exact path="/header" component={Header}/>
      <div className="App">
        <h1>Hello World from App</h1>
        {/* <Header img="https://images.unsplash.com/photo-1553532070-9f677c9df3dc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" /> */}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
