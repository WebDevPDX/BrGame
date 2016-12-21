import _ from 'lodash'
import { createStoreOffer } from './helpers.js'

const waresStart = createStoreOffer(6)

export default function(state = waresStart, action) {
  const cloned = _.cloneDeep(action.payload)
  switch(action.type) {
    case 'BUY_MONSTER':
      let waresInd = null
      cloned.wares.find((item, index) => {
        if (cloned.monster.id === item.id) {
          waresInd = index
        }
      })
      console.log(waresInd)
      cloned.wares.splice(waresInd, 1)
      return cloned.wares
  }
  return state
}
