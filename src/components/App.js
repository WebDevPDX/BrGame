import React, { Component } from 'react';
import Nav from './nav'
import { farm } from './DataStore'
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App-game-frame">
      	<Nav />
      	{this.props.children}
      </div>
    )
  }
}

export default App
