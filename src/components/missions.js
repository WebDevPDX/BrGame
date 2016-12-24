import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import _ from 'lodash'
import { updatePickedMission, completeContract } from '../actions/index'
import './styles/missions.css'

class Missions extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount() {
    let currentMissions = []
    this.props.missions.map(org => {
      currentMissions.push(org.find(mission => {
        if (!mission.completed) {
          return mission
        }
      }))
    })
    if (currentMissions.length > 0) {
      this.setState({
        currentMissions: currentMissions
      })
    }
  }
  handleContractClick(index) {
    this.props.updatePickedMission(this.state.currentMissions[index], this.props.allMissions, this.props.owned)
    this.setState({selectedMatch: null})
  }
  handleMonsterClick(id) {
    this.props.owned.find(monster => {
      if (monster.id === id) {
        this.setState({
          selectedMatch: monster
        })
      }
    })
  }
  handleCompleteContract() {
    this.props.completeContract(this.state.selectedMatch, this.props.owned, this.props.allMissions, this.props.farm)
    this.setState({
      selectedMatch: null
    })
    let currentMissions = []
    this.props.missions.map(org => {
      currentMissions.push(org.find(mission => {
        if (!mission.completed) {
          return mission
        }
      }))
    })
    if (currentMissions.length > 0) {
      this.setState({
        currentMissions: currentMissions
      })
    }
  }
  render() {
    const selectedMatch = this.state.selectedMatch
    const displayselectedMatch = () => {
      if (selectedMatch) {
        return(
          <div className="details-frame-contracts">
            <img src={selectedMatch.image} alt={selectedMatch.type}/>
            <h5>{selectedMatch.name}</h5>
            <ul className="monster-overview">
              <li className="b">Type: {selectedMatch.type}</li>
              <li className="b">Gender: {selectedMatch.gender}</li>
              <li className="spacer"></li>
              <li className="tab-sm">STR: {selectedMatch.stats.str}</li>
              <li className="tab-sm">DEX: {selectedMatch.stats.dex}</li>
              <li className="tab-sm">CON: {selectedMatch.stats.con}</li>
              <li className="tab-sm">INT: {selectedMatch.stats.int}</li>
              <li className="tab-sm">WIS: {selectedMatch.stats.wis}</li>
              <li className="tab-sm">CHA: {selectedMatch.stats.cha}</li>
              <li className="tab-sm">FER: {selectedMatch.stats.fer}</li>
              <li className="spacer"></li>
              {selectedMatch.traits && <li className="b">TRAIT: {selectedMatch.traits.name}</li>}
              <li className="divider"></li>
              <li className="spacer"></li>
            </ul>
            {(selectedMatch) && <button className="btn green darken-2" onClick={() => this.handleCompleteContract()}>Complete Contract</button>}
          </div>
        )
      }
    }
    return (
      <div className="contracts-total-frame">
        <div className="panel">
          <div className="selected-mission-panel">
            {!_.isEmpty(this.props.picked) &&
              <ul>
                <li>The {this.props.picked.logo.slice(8, this.props.picked.logo.length -4).toUpperCase()} is looking for a monster meeting the following requirements:</li>
                <li className="spacer"></li>
                {Object.keys(this.props.picked.required).map(key => {
                  if (key !== 'stats') {
                    return <li key={key}>{`${key.toUpperCase()}: ${this.props.picked.required[key]}`}</li>
                  }
                  if (key === 'stats') {
                    return (
                      <li key={key}>
                        {Object.keys(this.props.picked.required.stats).map(prop => {
                          return `${prop}: ${this.props.picked.required.stats[prop]}`
                        })}
                      </li>
                    )
                  }
                })}
                <li className="spacer"></li>
                <li>Any breeder capable to delivering a monster as per requirements will be compensated.</li>
                <li className="spacer"></li>
                <li>We are willing to pay {this.props.picked.reward} Credits.</li>
                <li className="spacer"></li>
                <li className="divider"></li>
              </ul>}
          </div>
          <div className="match-details">{displayselectedMatch()}</div>
        </div>

        <div className="mission-list">
          <h4 className="contract-list-header">Current Monster Contracts</h4>
          {this.state.currentMissions && this.state.currentMissions.map((mission, index) => {
            return (
              <div key={index} className="mission-frame" onClick={() => this.handleContractClick(index)}>
                <img src={mission.logo} />
                <p>Requirements:</p>
                <ul>
                  {Object.keys(mission.required).map(key => {
                    if (key !== 'stats') {
                      return <li key={key}>{`${key}: ${mission.required[key]}`}</li>
                    }
                    if (key === 'stats') {
                      return (
                        <ul key={key}>
                          {Object.keys(mission.required.stats).map(prop => {
                            return <li>{`${prop}: ${mission.required.stats[prop]}`}</li>
                          })}
                        </ul>
                      )
                    }
                  })}
                </ul>
                <p>Reward: {mission.reward}</p>
              </div>
            )
          })}
        </div>

        <div className="monster-list">
          {!_.isEmpty(this.props.allMissions.matched) && this.props.allMissions.matched.map(currentMonster => {
              const frameColor = {backgroundColor: '#fff', border: ''}
              if (currentMonster.gender === 'male') {
                frameColor.backgroundColor = '#4286f4'
              } else {
                frameColor.backgroundColor = '#f44271'
              }
              return (
                <div key={currentMonster.id} className="contract-monster-frame" onClick={() => this.handleMonsterClick(currentMonster.id)} style={frameColor}>
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
    missions: state.missions.list,
    picked: state.missions.picked,
    allMissions: state.missions,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    updatePickedMission: updatePickedMission,
    completeContract: completeContract,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Missions)
