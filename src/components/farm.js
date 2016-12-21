import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { sellMonster } from '../actions/index'
import './styles/farm.css'

class Farm extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    const bgImg = {backgroundImage: `url(/images/${this.props.farm.season}.jpg)`}
    const season = this.props.farm.season.charAt(0).toUpperCase() + this.props.farm.season.slice(1)
    return (
      <div className="frame" style={bgImg}>
        <h3 className="white-text">{season} of {this.props.farm.year}</h3>
        <div className="farm-overview">
          <ul>
            <li className="b">Money: {this.props.farm.money}</li>
            <li className="b">Monsters Owned: {this.props.owned.length}</li>
            <li className="b">Offer in Store: {this.props.wares.length}</li>
          </ul>
        </div>
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

export default connect(mapStateToProps)(Farm)
