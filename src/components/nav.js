import React, { Component } from 'react';
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { endTurnFarm, endTurnOwned } from '../actions/index'
import './styles/nav.css'

class Nav extends Component {
	render() {
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
									<li><Link to="/" className="btn" onClick={() => {this.props.endTurnFarm(this.props.farm, this.props.owned), this.props.endTurnOwned(this.props.owned)}}>End Turn</Link></li>
									<li><a className="btn yellow black-text">Money: {this.props.farm.money}</a></li>
									<li><Link to="/">Farm</Link></li>
									<li><Link to="/breeding">Breeding</Link></li>
									<li>
										<a className="dropdown-button" href="#!" data-activates="townDropdown">Town</a>
									</li>
									<li>
										<a className="dropdown-button" href="#!" data-activates="buildingsDropdown">Buildings</a>
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
		farm: state.farm,
		owned: state.owned,
		wares: state.wares,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		endTurnFarm: endTurnFarm,
		endTurnOwned: endTurnOwned
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
