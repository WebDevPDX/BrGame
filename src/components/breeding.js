import React, { Component } from 'react'
import { owned } from './DataStore'
import { getBuyPrice } from './calculations'
import './styles/breeding.css'

class Breeding extends Component {
  constructor() {
    super();
    this.state = {
      owned: owned,
    }
  }
  handleMonsterClick(id) {
    owned.find(monster => {
      if (monster.id === id) {
        if (!this.state.breeder1) {
          this.setState({breeder1: monster})
        } else {
          this.setState({breeder2: monster})
        }
      }
    })
  }
  handleBreedingClick() {
    
  }
  render() {
    //interaction panel
    const breeder1 = this.state.breeder1
    const breeder2 = this.state.breeder2
    const displayDetailsBreeder1 = () => {
      if (breeder1) {
        return(
          <div className="details-frame">
            <img src={breeder1.image} alt={breeder1.type}/>
            <h5>{breeder1.name}</h5>
            <ul className="monster-overview">
              <li className="b">Type: {breeder1.type}</li>
              <li className="b">Gender: {breeder1.gender}</li>
              <li className="spacer"></li>
              <li className="tab">STR: {breeder1.stats.str}</li>
              <li className="tab">DEX: {breeder1.stats.dex}</li>
              <li className="tab">CON: {breeder1.stats.con}</li>
              <li className="tab">INT: {breeder1.stats.int}</li>
              <li className="tab">WIS: {breeder1.stats.wis}</li>
              <li className="tab">CHA: {breeder1.stats.cha}</li>
              <li className="tab">FER: {breeder1.stats.fer}</li>
              <li className="spacer"></li>
              {breeder1.traits && <li className="b">TRAIT: {breeder1.traits.name}</li>}
              <hr />
            </ul>
          </div>
        )
      }
    }
    const displayDetailsBreeder2 = () => {
      if (breeder2) {
        return(
          <div className="details-frame">
            <img src={breeder2.image} alt={breeder2.type}/>
            <h5>{breeder2.name}</h5>
            <ul className="monster-overview">
              <li className="b">Type: {breeder2.type}</li>
              <li className="b">Gender: {breeder2.gender}</li>
              <li className="spacer"></li>
              <li className="tab">STR: {breeder2.stats.str}</li>
              <li className="tab">DEX: {breeder2.stats.dex}</li>
              <li className="tab">CON: {breeder2.stats.con}</li>
              <li className="tab">INT: {breeder2.stats.int}</li>
              <li className="tab">WIS: {breeder2.stats.wis}</li>
              <li className="tab">CHA: {breeder2.stats.cha}</li>
              <li className="tab">FER: {breeder2.stats.fer}</li>
              <li className="spacer"></li>
              {breeder2.traits && <li className="b">TRAIT: {breeder2.traits.name}</li>}
            </ul>
          </div>
        )
      }
    }
    return (
      <div>
        <div className="breeding-panel">
          {breeder1 && <div>{displayDetailsBreeder1()}</div>}
          {breeder2 && <div>{displayDetailsBreeder2()}</div>}
          {breeder1 && breeder2 && <button className="btn purple breed-them" onClick={() => this.handleBreedingClick(breeder1.id)}>Breed them</button>}
          {(breeder1 || breeder2) && <button className="btn red cancel">Clear</button>}
        </div>
        {this.state.owned.map(currentMonster => {
          return (
            <div key={currentMonster.id} className="monster-frame" onClick={() => this.handleMonsterClick(currentMonster.id)} style={currentMonster.gender === 'male' ? {backgroundColor: '#4286f4'} : {backgroundColor: '#f44271'}}>
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

export default Breeding
