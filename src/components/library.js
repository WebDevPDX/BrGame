import React, { Component } from 'react';
import { connect } from 'react-redux'
import './styles/library.css'

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstLevel: Object.getOwnPropertyNames(this.props.library),
      firstLevelSelected: null,
      secondLevel: null,
      secondLevelSelected: null,
      thirdLevel: null
    }
  }
  handleFirstPanelClick(key) {
    this.setState({
      firstLevelSelected: key,
      secondLevel: Object.getOwnPropertyNames(this.props.library[key]),
      secondLevelSelected: null,
      thirdLevel: null,
    })
  }
  handleSecondPanelClick(key) {
    this.setState({
      secondLevelSelected: key,
    }, () => {this.setState({
      thirdLevel: this.props.library[this.state.firstLevelSelected][this.state.secondLevelSelected]
    })})
  }
  render() {
    return (
      <div>
        <div className="panel-left">
          {this.state.firstLevel.map(property => {
            return (
              <div className="property-button btn btn-large amber darken-2" key={property} onClick={() => this.handleFirstPanelClick(property)}>{property}</div>
            )
          })}
        </div>
        <div className="panel-middle">
          {this.state.secondLevel && this.state.secondLevel.map(property => {
            return (
              <div className="property-button btn btn-large amber darken-2" key={property} onClick={() => this.handleSecondPanelClick(property)}>{property}</div>
            )
          })}
        </div>
        <div className="panel-right">
          {this.state.firstLevelSelected === 'how to play' && this.state.secondLevelSelected && <div><h5>{this.state.secondLevelSelected.charAt(0).toUpperCase() + this.state.secondLevelSelected.slice(1)}</h5><p>{this.state.thirdLevel}</p></div>}
          {this.state.firstLevelSelected === 'monsters' && <div><p>{this.state.thirdLevel}</p></div>}
          {this.state.firstLevelSelected === 'traits' && this.state.thirdLevel && <div><h5>{this.state.thirdLevel.name}</h5><p>{this.state.thirdLevel.description}</p><p>{this.state.thirdLevel.changes}</p></div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
	return {
		library: state.library,
	}
}

export default connect(mapStateToProps)(Library)
