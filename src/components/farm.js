import React, { Component } from 'react'
import { farm, owned, wares} from './DataStore'
import { endTurn } from './calculations'
import './styles/farm.css'

class Farm extends Component {
  constructor() {
    super();
    this.state = {
      season: farm.season,
      year: farm.year,
      money: farm.money,
      owned: owned,
      wares: wares,
    }
  }
  handleEndTurnClick() {
    endTurn()
    this.setState({season: farm.season, year: farm.year, money: farm.money, owned: owned, wares: wares})
  }
  render() {
    const bgImg = {backgroundImage: `url(/images/${this.state.season}.jpg)`}
    const season = this.state.season.charAt(0).toUpperCase() + this.state.season.slice(1)
    return (
      <div className="frame" style={bgImg}>
        <h3 className="white-text">{season} of {this.state.year}</h3>
        <div className="farm-overview">
          <ul>
            <li className="b">Money: {this.state.money}</li>
            <li className="b">Monsters Owned: {this.state.owned.length}</li>
            <li className="b">Offer in Store: {this.state.wares.length}</li>
          </ul>
        </div>
        <button className="btn turn-btn" onClick={() => {this.handleEndTurnClick()}}>END TURN</button>
      </div>
    )
  }
}

export default Farm
