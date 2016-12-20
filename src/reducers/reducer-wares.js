import { createStoreOffer } from './helpers.js'

const waresStart = createStoreOffer(6)

export default function(state = waresStart, action) {
  return state
}
