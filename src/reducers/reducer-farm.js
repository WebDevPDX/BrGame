const farmStart = {
	money: 1000,
	season: 'spring',
	year: 1374
}

export default function(state = farmStart, action) {
	switch (action.type) {
	case 'TURN_ENDED_FARM':
		const newFarm = Object.assign({}, action.payload)
		switch(newFarm.season) {
		    case 'spring':
		      newFarm.season = 'summer'
		      break
		    case 'summer':
		      newFarm.season = 'autumn'
		      break
		    case 'autumn':
		      newFarm.season = 'winter'
		      break
		    case 'winter':
		      newFarm.season = 'spring'
		      newFarm.year += 1
		      break
		    default:
		      newFarm.season = 'spring'
		}
		return newFarm
	}
	return state
}
