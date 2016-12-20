import _ from 'lodash'
import { createOwned } from './helpers.js'

const ownedStart = createOwned(2)

export default function(state = ownedStart, action) {
  switch (action.type) {
	case 'TURN_ENDED_OWNED':
		const clonedOwned = _.cloneDeep(action.payload)
    console.log(clonedOwned)
	}
  return state
}
