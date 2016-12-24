import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { breedMonsters } from '../actions/index'
import './styles/breeding.css'

class Breeding extends Component {
  constructor() {
    super();
    this.state = {
      breeder1: null,
      breeder2: null,
    }
  }
  handleMonsterClick(id) {
    // console.log(id)
    this.props.owned.find(monster => {
      if (monster.id === id) {
        if (monster.available) {
          if (!this.state.breeder1) {
            if (!this.state.breeder2) {
              this.setState({breeder1: monster})
            } else if (this.state.breeder2 && this.state.breeder2.id !== monster.id)
              this.setState({breeder1: monster})
          }
          if (this.state.breeder1 && this.state.breeder1.id !== monster.id) {
            this.setState({breeder2: monster})
          }
        }
      } // END CHECK MONSTER ENABLED
    }) // END FIND MONSTER COMPARISON
  }
  handleBreedingClick(breeder1,breeder2) {
    this.props.breedMonsters(breeder1, breeder2, this.props.owned)
    this.setState({breeder1: null, breeder2: null})
  }
  clearBreeder1() {
    this.setState({breeder1: null})
  }
  clearBreeder2() {
    this.setState({breeder2: null})
  }
  render() {
    // console.log(this.props.owned)
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
            </ul>
            {(breeder1) && <button className="btn red cancel" onClick={() => this.clearBreeder1()}>Clear</button>}
            <hr />
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
            {(breeder2) && <button className="btn red cancel" onClick={() => this.clearBreeder2()}>Clear</button>}
            <hr />
          </div>
        )
      }
    }
    return (
      <div className="breeding-total-frame">
        <div className="breeding-panel">
          {breeder1 && <div>{displayDetailsBreeder1()}</div>}
          {breeder2 && <div>{displayDetailsBreeder2()}</div>}
          {breeder1 && breeder2 && <button className="btn purple breed-them" onClick={() => this.handleBreedingClick(breeder1, breeder2)}>Breed them</button>}
        </div>
        <div className="overview-panel">
          {this.props.owned.map(currentMonster => {
            const frameColor = {backgroundColor: '#fff', border: ''}
            if (!currentMonster.available) {
              frameColor.backgroundColor = '#ccc'
              frameColor.border = '1px solid #333'
            } else {
              if (currentMonster.gender === 'male') {
                frameColor.backgroundColor = '#4286f4'
              } else {
                frameColor.backgroundColor = '#f44271'
              }
            }
            return (
              <div key={currentMonster.id} className="monster-frame" onClick={() => this.handleMonsterClick(currentMonster.id)} style={frameColor}>
                <ul className="monster-overview">
                  <li className="b">Name: {currentMonster.name}</li>
                  <li className="b">Type: {currentMonster.type}</li>
                  <li className="b">Exp: {currentMonster.experience}</li>
                  <li className="b">Level: {currentMonster.level}</li>
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
    breedMonsters: breedMonsters
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Breeding)
