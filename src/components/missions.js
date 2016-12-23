import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { sellMonster } from '../actions/index'
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
  compareMissionToOwned() {
    const matching = 0
  }
  handleContractClick(index) {
    this.setState({
      selectedMission: this.state.currentMissions[index]
    })
  }
  render() {

    //interaction panel
    return (
      <div>
        <div className="panel">
          <div className="selected-mission-panel">
            {this.state.selectedMission &&
              <ul>
                {Object.keys(this.state.selectedMission.required).map(key => {
                  if (key !== 'stats') {
                    return <li key={key}>{`${key}: ${this.state.selectedMission.required[key]}`}</li>
                  }
                  if (key === 'stats') {
                    return (
                      <li key={key}>
                        {Object.keys(this.state.selectedMission.required.stats).map(prop => {
                          return `${prop}: ${this.state.selectedMission.required.stats[prop]}`
                        })}
                      </li>
                    )
                  }
                })}
              </ul>}
          </div>
        </div>

        <div className="mission-list">
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
                        <li key={key}>
                          {Object.keys(mission.required.stats).map(prop => {
                            return `${prop}: ${mission.required.stats[prop]}`
                          })}
                        </li>
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
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		farm: state.farm,
		owned: state.owned,
    missions: state.missions,

	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({

	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Missions)
