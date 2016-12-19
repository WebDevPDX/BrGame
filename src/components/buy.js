import React, { Component } from 'react'
import { wares, owned, farm } from './DataStore'
import { getBuyPrice } from './calculations'
import './styles/market.css'

class Buy extends Component {
  constructor() {
    super();
    this.state = {
      wares: wares,
      money: farm.money,
    }
  }
  handleWaresClick(id) {
    wares.find(monster => {
      if (monster.id === id) {
        this.setState({interactionMonster: monster})
      }
    })
  }
  handleBuyMonster(id) {
    let arrInd;
    wares.find((monster, index) => {
      if (monster.id === id) {
         arrInd = index
         owned.push(monster)
         farm.money -= getBuyPrice(monster)
      }
    })
    wares.splice(arrInd, 1)
    this.setState({wares: wares, interactionMonster: null, money: farm.money})
  }
  render() {
    //interaction panel
    const monster = this.state.interactionMonster
    const displayDetails = () => {
      if (monster) {
        return(
          <div className="details-frame">
            <img src={monster.image} alt={monster.type}/>
            <h5>{monster.name}</h5>
            <ul className="monster-overview">
              <li className="b">Type: {monster.type}</li>
              <li className="b">Gender: {monster.gender}</li>
              <li className="spacer"></li>
              <li className="tab">STR: {monster.stats.str}</li>
              <li className="tab">DEX: {monster.stats.dex}</li>
              <li className="tab">CON: {monster.stats.con}</li>
              <li className="tab">INT: {monster.stats.int}</li>
              <li className="tab">WIS: {monster.stats.wis}</li>
              <li className="tab">CHA: {monster.stats.cha}</li>
              <li className="tab">FER: {monster.stats.fer}</li>
              <li className="spacer"></li>
              {monster.traits && <li className="b">TRAIT: {monster.traits.name}</li>}
            </ul>
            <button className="btn yellow black-text money">Money: {this.state.money}</button>
            <button className="btn red price">Price: {getBuyPrice(monster)}</button>
            <button className="btn purple buy-this" onClick={() => this.handleBuyMonster(monster.id)}>Buy This Monster</button>
          </div>
        )
      }
    }
    return (
      <div>
        <div className="panel">
          {monster && <div>{displayDetails()}</div>}
        </div>
        {this.state.wares.map(currentMonster => {
          return (
            <div key={currentMonster.id} className="monster-frame" onClick={() => this.handleWaresClick(currentMonster.id)} style={currentMonster.gender === 'male' ? {backgroundColor: '#4286f4'} : {backgroundColor: '#f44271'}}>
              <ul className="monster-overview">
                <li className="b">Name: {currentMonster.name}</li>
                <li className="b">Type: {currentMonster.type}</li>
                <li className="b">Gender: {currentMonster.gender}</li>
                <li className="spacer"></li>
                <li className="tab">STR: {currentMonster.stats.str}</li>
                <li className="tab">DEX: {currentMonster.stats.dex}</li>
                <li className="tab">CON: {currentMonster.stats.con}</li>
                <li className="tab">INT: {currentMonster.stats.int}</li>
                <li className="tab">WIS: {currentMonster.stats.wis}</li>
                <li className="tab">CHA: {currentMonster.stats.cha}</li>
                <li className="tab">FER: {currentMonster.stats.fer}</li>
                <li className="spacer"></li>
                {currentMonster.traits && <li className="b">TRAIT: {currentMonster.traits.name}</li>}
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Buy