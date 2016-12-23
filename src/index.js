import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'


import App from './components/App'
import Farm from './components/farm'
import Buy from './components/buy'
import Breeding from './components/breeding'
import Sell from './components/sell'
import Library from './components/library'
import Missions from './components/missions'
import './index.css'

ReactDOM.render((
	<Provider store={createStore(reducers)}>
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Farm}/>
				<Route path="/breeding" component={Breeding} />
				<Route path="/buy" component={Buy} />
				<Route path="/sell" component={Sell} />
				<Route path="/library" component={Library} />
				<Route path="/missions" component={Missions} />
			</Route>
		</Router>
	</Provider>
), document.getElementById('root')
)
