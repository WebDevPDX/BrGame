import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateFoodSetting, updateMedicalSetting } from '../actions/index'
import './styles/farm.css'

class Farm extends Component {
  changeFoodSettings(event) {
    this.props.updateFoodSetting(event.target.value, this.props.farm)
  }
  changeMedicalSettings(event) {
    //console.log(event.target.value)
    this.props.updateMedicalSetting(event.target.value, this.props.farm)
  }
  render() {
    const bgImg = {backgroundImage: `url(/images/${this.props.farm.season}.jpg)`}
    const season = this.props.farm.season.charAt(0).toUpperCase() + this.props.farm.season.slice(1)
    const farm = this.props.farm
    return (
      <div className="frame" style={bgImg}>
        <h3 className="white-text farm-screen-season-header">{season} of {this.props.farm.year}</h3>
        <div className="farm-overview">
          <ul>
            <li className="b">Money: {this.props.farm.money}</li>
            <li className="b">Monsters Owned: {this.props.owned.length}</li>
            <li className="b">Offer in Store: {this.props.wares.length}</li>
          </ul>
          <form className="right" action="#">
            <fieldset className="foodSettings">
              <p>Food Quality for Farm</p>
                <input className="with-gap" name="food" type="radio" id="food1" value="1" checked={farm.food === 1} onChange={this.changeFoodSettings.bind(this)} />
                <label htmlFor="food1">Poor</label>
                <input className="with-gap" name="food" type="radio" id="food3" value="3" checked={farm.food === 3} onChange={this.changeFoodSettings.bind(this)} />
                <label htmlFor="food3">Decent</label>
                <input className="with-gap" name="food" type="radio" id="food5" value="5" checked={farm.food === 5} onChange={this.changeFoodSettings.bind(this)} />
                <label htmlFor="food5">Great</label>
            </fieldset>
            <fieldset className="medicalSettings">
              <p>Medical Service for Farm</p>
                <input className="with-gap" name="med" type="radio" id="med1" value="1" checked={farm.medical === 1} onChange={this.changeMedicalSettings.bind(this)} />
                <label htmlFor="med1">Poor</label>
                <input className="with-gap" name="med" type="radio" id="med3" value="3" checked={farm.medical === 3} onChange={this.changeMedicalSettings.bind(this)} />
                <label htmlFor="med3">Decent</label>
                <input className="with-gap" name="med" type="radio" id="med5" value="5" checked={farm.medical === 5} onChange={this.changeMedicalSettings.bind(this)} />
                <label htmlFor="med5">Great</label>
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
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
    updateFoodSetting: updateFoodSetting,
    updateMedicalSetting: updateMedicalSetting,
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Farm)
