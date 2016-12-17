import React, { Component } from 'react'
import { wares } from './DataStore'
import InteractionPanel from './interactionPanel'
import './styles/store.css'
import { connect } from 'react-redux'

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interactionMonster: {}
    }
  }
  handleWaresClick(id) {
    wares.find(monster => {
      if (monster.id === id) {
        this.setState({interactionMonster: monster})
      }
    })
  }
  render() {
    return (
      <div>
      <InteractionPanel monster={this.props.monster}/>
        {wares.map(currentMonster => {
          console.log(currentMonster)
          let liClass = ''
          let content = ''
          if (currentMonster.traits) {
            liClass = 'show b'
            content = currentMonster.traits.name
          } else {
            liClass = 'hide'
            content = null
          }
          return (
            <div key={currentMonster.id} className="monster-frame" onClick={() => this.handleWaresClick(currentMonster.id)} style={currentMonster.gender === 'male' ? {backgroundColor: '#4286f4'} : {backgroundColor: '#f44271'}}>
              <ul className="monster-overview">
                <li className="b">Name: {currentMonster.name}</li>
                <li className="b">Type: {currentMonster.type}</li>
                <li className="b">Gender: {currentMonster.gender}</li>
                <li></li>
                <li className="tab">STR: {currentMonster.stats.str}</li>
                <li className="tab">DEX: {currentMonster.stats.dex}</li>
                <li className="tab">CON: {currentMonster.stats.con}</li>
                <li className="tab">INT: {currentMonster.stats.int}</li>
                <li className="tab">WIS: {currentMonster.stats.wis}</li>
                <li className="tab">CHA: {currentMonster.stats.cha}</li>
                <li className="tab">FER: {currentMonster.stats.fer}</li>
                <li className={liClass}>TRAIT: {content}</li>
              </ul>
            </div>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Store)
