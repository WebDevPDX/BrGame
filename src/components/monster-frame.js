import React, { Component } from 'react'
import './styles/monster-frame.css'

class MonsterFrame extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  
  render() {
    console.log(this.props.monster)
    const monster = this.props.monster
    return (
      <div key={monster.id} className="monster-frame" style={monster.gender === 'male' ? {backgroundColor: '#4286f4'} : {backgroundColor: '#f44271'}}>
        <ul className="monster-overview">
          <li className="b">Name: {monster.name}</li>
          <li className="b">Type: {monster.type}</li>
          <li className="b">Exp: {monster.experience}</li>
          <li className="b">Level: {monster.level}</li>
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
      </div>
    )
  }
}

export default MonsterFrame
