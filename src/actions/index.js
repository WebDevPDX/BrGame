export function endTurnFarm(farm) {
	return {
		type: 'TURN_ENDED_FARM',
		payload: farm
	}
}
export function endTurnOwned(owned) {
	return {
		type: 'TURN_ENDED_OWNED',
		payload: owned
	}
}
