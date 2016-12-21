import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { buyMonster } from '../actions/index'
import { getBuyPrice } from '../reducers/helpers'
import './styles/buy.css'

class Buy extends Component {
  constructor() {
    super();
    this.state = {
      interactionMonster: null,
    }
  }
  handleWaresClick(id) {
    this.props.wares.find(monster => {
      if (monster.id === id) {
        this.setState({interactionMonster: monster})
      }
    })
  }
  handleBuyMonster() {
    this.props.buyMonster(this.state.interactionMonster, this.props.owned, this.props.farm, this.props.wares)
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
            <div className="red darken-1 price">Price: {getBuyPrice(monster)}</div>
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
        {this.props.wares.map(currentMonster => {
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

function mapStateToProps(state) {
	return {
		farm: state.farm,
		owned: state.owned,
		wares: state.wares,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    buyMonster: buyMonster
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Buy)
