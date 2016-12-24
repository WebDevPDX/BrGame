export function endTurn(farm, owned, wares) {
	return {
		type: 'TURN_ENDED',
		payload: {
			farm: farm,
			owned: owned,
			wares: wares,
		}
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
export function updatePickedMission(picked, missions, owned) {
	return {
		type: 'PICKED_MISSION_UPDATE',
		payload: {
			picked: picked,
			missions: missions,
			owned: owned,
		}
	}
}
export function completeContract(monster, owned, missions, farm) {
	return {
		type: 'COMPLETE_CONTRACT',
		payload: {
			monster: monster,
			owned: owned,
			missions: missions,
			farm: farm,
		}
	}
}
