//TODO consolidate end turn functions

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
export function buyMonster(monster, owned, farm, wares) {
	return {
		type: 'BUY_MONSTER',
		payload: {
			monster: monster,
			owned: owned,
			farm: farm,
			wares: wares,
		}
	}
}
export function sellMonster(monster, owned, farm) {
	return {
		type: 'SELL_MONSTER',
		payload: {
			monster: monster,
			owned: owned,
			farm: farm,
		}
	}
}
export function updateFoodSetting(val, farm) {
	return {
		type: 'CHANGE_FOOD_SETTING',
		payload: {
			farm: farm,
			val: parseInt(val),
		}
	}
}
export function updateMedicalSetting(val, farm) {
	return {
		type: 'CHANGE_MEDICAL_SETTING',
		payload: {
			farm: farm,
			val: parseInt(val),
		}
	}
}
