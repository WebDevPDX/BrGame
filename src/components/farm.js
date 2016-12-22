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
  changeFoodSettings(event) {
    console.log(event.target.value)
  }
  changeMedSettings() {

  }
  render() {
    const bgImg = {backgroundImage: `url(/images/${this.props.farm.season}.jpg)`}
    const season = this.props.farm.season.charAt(0).toUpperCase() + this.props.farm.season.slice(1)
    const farm = this.props.farm
    return (
      <div className="frame" style={bgImg}>
        <h3 className="white-text">{season} of {this.props.farm.year}</h3>
        <div className="farm-overview">
          <ul>
            <li className="b">Money: {this.props.farm.money}</li>
            <li className="b">Monsters Owned: {this.props.owned.length}</li>
            <li className="b">Offer in Store: {this.props.wares.length}</li>
          </ul>
          <form className="right" action="#">
            <fieldset className="foodSettings">
              <p>Food Quality for Farm</p>
                <input className="with-gap" name="food" type="radio" id="1" checked={farm.food === 1} onChange={this.changeFoodSettings}/>
                <label htmlFor="1">Poor</label>
                <input className="with-gap" name="food" type="radio" id="3" checked={farm.food === 3} onChange={this.changeFoodSettings}/>
                <label htmlFor="3">Decent</label>
                <input className="with-gap" name="food" type="radio" id="5" checked={farm.food === 5} onChange={this.changeFoodSettings}/>
                <label htmlFor="5">Great</label>
            </fieldset>
            <fieldset className="medicalSettings">
              <p>Medical Service for Farm</p>
                <input className="with-gap" name="med" type="radio" id="1" checked={farm.medical === 1} onChange={this.changeMedSettings}/>
                <label htmlFor="1">Poor</label>
                <input className="with-gap" name="med" type="radio" id="3" checked={farm.medical === 3} onChange={this.changeMedSettings}/>
                <label htmlFor="3">Decent</label>
                <input className="with-gap" name="med" type="radio" id="5"  checked={farm.medical === 5} onChange={this.changeMedSettings}/>
                <label htmlFor="5">Great</label>
            </fieldset>
          </form>
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
