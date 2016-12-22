import _ from 'lodash'
import { getBuyPrice, getSalesPrice } from './helpers'

const farmStart = {
	money: 1000,
	season: 'spring',
	year: 1374,
	food: 3,
	medical: 3,
}

export default function(state = farmStart, action) {
	const cloned = _.cloneDeep(action.payload)
	switch (action.type) {
		case 'TURN_ENDED_FARM':
			switch(cloned.farm.season) {
		    case 'spring':
		      cloned.farm.season = 'summer'
		      break
		    case 'summer':
		      cloned.farm.season = 'autumn'
		      break
		    case 'autumn':
		      cloned.farm.season = 'winter'
		      break
		    case 'winter':
		      cloned.farm.season = 'spring'
		      cloned.farm.year += 1
		      break
		    default:
		      cloned.farm.season = 'spring'
			}
			cloned.farm.money -= action.payload.owned.length * 20
			return cloned.farm
		case 'BUY_MONSTER':
			cloned.farm.money -= getBuyPrice(cloned.monster)
			return cloned.farm
		case 'SELL_MONSTER':
			cloned.farm.money += getSalesPrice(cloned.monster)
			return cloned.farm
		default:
			return state
	}
}
