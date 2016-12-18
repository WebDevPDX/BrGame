import React, { Component } from 'react';
import { Link } from 'react-router'
import './styles/nav.css'

class Nav extends Component {
	render() {
		const navbar =	<div>
							<ul id="townDropdown" className="dropdown-content">
								<li><Link to="/market">Buy Monsters</Link></li>
								<li>Library</li>
								<li>Contractors</li>
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
								<ul className="right hide-on-med-and-down">
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

export default Nav
