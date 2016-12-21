import React, { Component } from 'react';
import { connect } from 'react-redux'
import Nav from './nav'
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

function mapStateToProps(state) {
	return {
		farm: state.farm,
		owned: state.owned,
		wares: state.wares,
	}
}

export default connect(mapStateToProps)(App)
