const farmStart = {
	money: 1000,
	season: 'spring',
	year: 1374
}

export default function(state = farmStart, action) {
	switch (action.type) {
		case 'TURN_ENDED_FARM':
		const clonedFarm = Object.assign({}, action.payload.farm)
			switch(clonedFarm.season) {
		    case 'spring':
		      clonedFarm.season = 'summer'
		      break
		    case 'summer':
		      clonedFarm.season = 'autumn'
		      break
		    case 'autumn':
		      clonedFarm.season = 'winter'
		      break
		    case 'winter':
		      clonedFarm.season = 'spring'
		      clonedFarm.year += 1
		      break
		    default:
		      clonedFarm.season = 'spring'
			}
			clonedFarm.money -= action.payload.owned.length * 20
			return clonedFarm
	}
	return state
}
