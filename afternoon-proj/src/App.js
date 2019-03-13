import React, { Component } from 'react';
import './App.css';
import Count from './components/Count'
import OuterBlock from './components/OuterBlock'

class App extends Component {
  render() {
    return (
      <div className="App">
        <OuterBlock />
        <Count />
      </div>
    );
  }
}

export default App;
