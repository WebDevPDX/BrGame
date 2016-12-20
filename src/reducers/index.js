import { combineReducers } from 'redux'
import FarmReducer from './reducer-farm'
import OwnedReducer from './reducer-owned'
import WaresReducer from './reducer-wares'

const rootReducer = combineReducers({
	farm: FarmReducer,
	owned: OwnedReducer,
	wares: WaresReducer,
})

export default rootReducer
