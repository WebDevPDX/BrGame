export function endTurnFarm(farm, owned) {
	return {
		type: 'TURN_ENDED_FARM',
		payload: {
			farm: farm,
			owned: owned
		}
	}
}
export function endTurnOwned(owned) {
	return {
		type: 'TURN_ENDED_OWNED',
		payload: owned
	}
}
export function breedMonsters(breeder1, breeder2, owned) {
	return {
		type: 'BREED_MONSTERS',
		payload: {
			breeder1: breeder1,
			breeder2: breeder2,
			owned: owned
		}
	}
}
