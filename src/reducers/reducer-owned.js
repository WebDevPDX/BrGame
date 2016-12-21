import _ from 'lodash'
import { createOwned, calcBreedingResult } from './helpers.js'

const ownedStart = createOwned(4)

export default function(state = ownedStart, action) {
  const cloned = _.cloneDeep(action.payload)
  switch (action.type) {
  	case 'TURN_ENDED_OWNED':
      cloned.forEach(monst => {
        monst.available = true
      })
      return cloned
    case 'BREED_MONSTERS':
      calcBreedingResult(action.payload.breeder1, action.payload.breeder2, cloned.owned)
      return cloned.owned
    case 'BUY_MONSTER':
      cloned.owned.push(cloned.monster)
      return cloned.owned
	}
  return state
}
