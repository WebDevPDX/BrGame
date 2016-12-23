import _ from 'lodash'
import { createOwned, calcBreedingResult } from './helpers.js'

const ownedStart = createOwned(4)

export default function(state = ownedStart, action) {
  const cloned = _.cloneDeep(action.payload)
  switch (action.type) {
  	case 'TURN_ENDED':
      console.log(cloned.owned)
      cloned.owned.forEach(monst => {
        monst.available = true
      })
      return cloned.owned
    case 'BREED_MONSTERS':
      calcBreedingResult(action.payload.breeder1, action.payload.breeder2, cloned.owned)
      return cloned.owned
    case 'BUY_MONSTER':
      cloned.owned.push(cloned.monster)
      return cloned.owned
    case 'SELL_MONSTER':
      let ownedInd = null
      cloned.owned.find((item, index) => {
        if (cloned.monster.id === item.id) {
          ownedInd = index
        }
      })
      //console.log(cloned.owned)
      cloned.owned.splice(ownedInd, 1)
      return cloned.owned
    default:
      return state
	}
}
