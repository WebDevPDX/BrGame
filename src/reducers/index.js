import { combineReducers } from 'redux'
import FarmReducer from './reducer-farm'
import OwnedReducer from './reducer-owned'
import WaresReducer from './reducer-wares'
import LibraryReducer from './reducer-library'

const rootReducer = combineReducers({
	farm: FarmReducer,
	owned: OwnedReducer,
	wares: WaresReducer,
	library: LibraryReducer,
})

export default rootReducer
