import { traits, monsterTypes, fNames, mNames, newMonster } from './DataStore'

export const randomIntBetween = function(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getNewStr(type) {
	let modifier = 0
	switch (type) {
		case 'horse':
		case 'lion' :
			modifier = 2
			break
		case 'bear':
			modifier = 1
			break
		default:
			modifier = 0
	}
	return modifier
}
function getNewDex(type) {
	let modifier = 0
	switch (type) {
		case 'wolf':
		case 'cat' :
			modifier = 3
			break
		case 'horse':
		case 'deer':
			modifier = 	1
			break
		default:
			modifier = 0
	}
	return modifier
}
function getNewCon(type) {
	let modifier = 0
	switch (type) {
		case 'horse':
			modifier = 3
			break
		case 'wolf':
		case 'cat':
		case 'bear':
		case 'deer':
			modifier = 	2
			break
		case 'cow':
		case 'lion':
			modifier = 1
			break
		default:
			modifier = 0
	}
	return modifier
}
function getNewInt(type) {
	let modifier = 0
	switch (type) {
		case 'harpy':
		case 'unicorn':
			modifier = 3
			break
		case 'cow':
			modifier = 	2
			break
		default:
			modifier = 0
	}
	return modifier
}
function getNewWis(type) {
	let modifier = 0
	switch (type) {
		case 'cow':
		case 'deer':
		case 'lion':
			modifier = 3
			break
		case 'unicorn':
			modifier = 	2
			break
		case 'harpy':
			modifier = 1
			break
		default:
			modifier = 0
	}
	return modifier
}
function getNewCha(type) {
	let modifier = 0
	switch (type) {
		case 'bear':
			modifier = 3
			break
		case 'harpy':
			modifier = 	2
			break
		case 'cat':
		case 'unicorn':
			modifier = 1
			break
		default:
			modifier = 0
	}
	return modifier
}

export const getNewType = function() {
	return monsterTypes[randomIntBetween(0, monsterTypes.length-1)]
}

export const getNewName = function(type) {
	switch(type) {
		case 'cow':
		case 'cat':
		case 'harpy':
		case 'unicorn':
		case 'deer':
			return fNames[randomIntBetween(0, fNames.length-1)]
		default:
			return mNames[randomIntBetween(0, mNames.length-1)]
	}
}

//stats start lowest at 5 and cap at 50
export const getNewStats = function(type) {
	return {
		str: randomIntBetween(1,6) + getNewStr(type),
		dex: randomIntBetween(1,6) + getNewDex(type),
		con: randomIntBetween(1,6) + getNewCon(type),
		int: randomIntBetween(1,6) + getNewInt(type),
		wis: randomIntBetween(1,6) + getNewWis(type),
		cha: randomIntBetween(1,6) + getNewCha(type),
		fer: randomIntBetween(1,30)
	}
}

export const getNewGender = function(type) {
	let gender = 'male'
	switch (type) {
		case 'cow':
		case 'cat':
		case 'harpy':
		case 'unicorn':
		case 'deer':
			gender = 'female'
			break
		default:
			gender = 'male'
	}
	return gender
} 

export const getNewTrait = function() {
	//find if a trait should be assigned
	const whichTrait = TraitNewChance()
	//console.log(whichTrait)
	const possibleTraits = []
	//find a trait and assign it
	for (var key in traits) {
		//get amount of keys that match criteria
		if (whichTrait && traits[key].chance === whichTrait) {
			possibleTraits.push(key)
		}
	}
	//console.log(possibleTraits)
	const traitNr = randomIntBetween(0, possibleTraits.length-1)
	const thisTrait = possibleTraits[traitNr]
	//console.log(traitNr, thisTrait)
	return traits[thisTrait]
}

export const createNewMonsterForStore = function() {
	const type = getNewType()
	const name = getNewName(type)
	return new newMonster(type, name)
}

export const createStoreOffer = function(amt) {
	const storeArr = []
	for (let i = 0; i < amt; i++) {
		storeArr.push(createNewMonsterForStore())
	} 
	return storeArr
}

function TraitNewChance() {
	const chance = Math.random()
	if (chance <= 0.02) {
		return 0.02
	} else if (chance > 0.02 && chance <= 0.04) {
		return 0.04
	} else if (chance > 0.04 && chance <= 0.08) {
		return 0.08
	} else {
		return null
	}
}