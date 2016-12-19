export function endTurn(farm) {
	return {
		type: 'TURN_ENDED',
		payload: farm
	}
}