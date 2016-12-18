import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom'
import App from './components/App'
import Farm from './components/farm'
import Market from './components/market'
import Breeding from './components/breeding'
import './index.css'
import { createNewMonsterForStore } from './components/calculations'

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Farm}/>
			<Route path="/breeding" component={Breeding} />
			<Route path="/market" component={Market} />
		</Route>
	</Router>
), document.getElementById('root')
)
