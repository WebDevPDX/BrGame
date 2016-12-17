import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import ReactDOM from 'react-dom'
import App from './components/App'
import Farm from './components/farm'
import Store from './components/store'
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

				<Route path="/store" component={Store} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('root')
)
