import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom'
import App from './components/App'
import Farm from './components/farm'
import Store from './components/store'
import './index.css'

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Farm}/>

			<Route path="/store" component={Store} />
		</Route>
	</Router>
), document.getElementById('root')
)

