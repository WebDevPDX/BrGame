import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom'
import App from './components/App'
import Farm from './components/farm'
import Market from './components/market'
import Breeding from './components/breeding'
import './index.css'
import configureStore from './redux/store'
import { Provider } from 'react-redux'
import { createNewMonsterForStore } from './components/calculations'

let initialState = {monster: createNewMonsterForStore()}

let store = configureStore(initialState)

ReactDOM.render((
	<Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Farm}/>
				<Route path="/breeding" component={Breeding} />
				<Route path="/market" component={Market} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('root')
)
