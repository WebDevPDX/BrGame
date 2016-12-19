import React, { Component } from 'react';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { endTurn } from '../actions/index'
import './styles/nav.css'

class Nav extends Component {
	render() {
		console.log(this.props.farm)
		const season = this.props.farm.season.charAt(0).toUpperCase() + this.props.farm.season.slice(1)
		const navbar =	<div>
							<ul id="townDropdown" className="dropdown-content">
								<li><Link to="/buy">Buy Monsters</Link></li>
								<li>Library</li>
								<li><Link to="/sell">Sell Monsters</Link></li>
							</ul>
							<ul id="buildingsDropdown" className="dropdown-content">
								<li className="sub">Barn</li>
								<li className="sub">Stable</li>
								<li className="sub">Den</li>
								<li className="sub">Kennel</li>
								<li className="sub">Parlor</li>
								<li className="sub">Aviary</li>
								<li className="sub">Caves</li>
								<li className="sub">Meadow</li>
								<li className="sub">Grove</li>
							</ul>
							<nav>
								<div className="nav-wrapper">
								<a className="brand-logo"><span className="season-year">{season} of {this.props.farm.year}</span></a>
								<ul className="right">
									<li><a className="btn" onClick={() => this.props.endTurn(this.props.farm)}>End Turn</a></li>
									<li><a className="btn yellow black-text">Money: {this.props.farm.money}</a></li>
									<li><Link to="/">Farm</Link></li>
									<li><Link to="/breeding">Breeding</Link></li>
									<li>
										<a className="dropdown-button" href="#!" data-activates="townDropdown">Town
											<i className="material-icons right">arrow_drop_down</i>
										</a>
									</li>
									<li>
										<a className="dropdown-button" href="#!" data-activates="buildingsDropdown">Buildings
											<i className="material-icons right">arrow_drop_down</i>
										</a>
									</li>
								</ul>
								</div>
							</nav>
						</div>
		return (
			<div>{navbar}</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		farm: state.farm
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		endTurn: endTurn
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
