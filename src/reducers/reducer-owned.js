import _ from 'lodash'
import { createOwned, calcBreedingResult } from './helpers.js'

const ownedStart = createOwned(4)

export default function(state = ownedStart, action) {
  let clonedOwned;
  switch (action.type) {
  	case 'TURN_ENDED_OWNED':
      clonedOwned = _.cloneDeep(action.payload)
      clonedOwned.forEach(monst => {
        monst.available = true
      })
      return clonedOwned
    case 'BREED_MONSTERS':
      clonedOwned = _.cloneDeep(action.payload.owned)
      calcBreedingResult(action.payload.breeder1, action.payload.breeder2, clonedOwned)
      return clonedOwned
	}
  return state
}
