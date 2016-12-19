import { combineReducers } from 'redux'
import WaresReducer from './reducer-wares'

const rootReducer = combineReducers({
	wares: WaresReducer
})

export default rootReducer