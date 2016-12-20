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

export const createOwned = function(amt) {
  const ownedArr = []
	while (ownedArr.length < amt) {
    const monster = createNewMonsterForStore()
    if (ownedArr.length < 1 || ownedArr[ownedArr.length-1].gender !== monster.gender) {
      ownedArr.push(monster)
    }
  }
	return ownedArr
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

export const getBuyPrice = function(monster) {
  let statsTotal = 0
  for (let key in monster.stats) {
    statsTotal += monster.stats[key]
  }
  statsTotal *= 15
  if (monster.traits) {
    switch (monster.traits.chance) {
      case 0.04:
        statsTotal += 500
        break
      case 0.02:
        statsTotal += 900
        break
      default:
        statsTotal += 250
    }
  }
  return statsTotal
}

export const getSalesPrice = function(monster) {
  let statsTotal = 0
  for (let key in monster.stats) {
    statsTotal += monster.stats[key]
  }
  let price = statsTotal *= 10
  if (monster.traits) {
    switch (monster.traits.chance) {
      case 0.04:
        price += 400
        break
      case 0.02:
        price += 750
        break
      default:
        price += 150
    }
  }
  console.log(price)
  if (monster.level >= 1) {
    price += price * (monster.level / 20)
  }
  console.log(price)
  return price
}

function createNewMonsterFromBreeding(type) {
  const name = getNewName(type)
  return new newMonster(type, name)
}

function increaseMonsterStat(monst) {
  const whichStat = randomIntBetween(0,7)
  switch(whichStat) {
    case 1:
      monst.stats.str += 1
      break
    case 2:
      monst.stats.dex += 1
      break
    case 3:
      monst.stats.con += 1
      break
    case 4:
      monst.stats.int += 1
      break
    case 5:
      monst.stats.wis += 1
      break
    case 6:
      monst.stats.cha += 1
      break
    default:
      monst.stats.con += 1
  }
}

function checkMonsterLevel(monst) {
  if (Math.floor(monst.experience / 100) > monst.level) {
    monst.level += 1
    for (let i = 0; i < 3; i++) {
      increaseMonsterStat(monst)
    }
  }
}

export const calcBreedingResult = function(monster1, monster2, owned) {
  // console.log('m1', monster1)
  // console.log('m2', monster2)
  // console.log('owned', owned)
  let child = {}
  let haveChild = false
  if (monster1.gender !== monster2.gender) {
    haveChild = randomIntBetween(0, 101) <= monster1.stats.fer + monster2.stats.fer
  }
  if (haveChild) {
    if(Math.random() < 0.5) {
      child = createNewMonsterFromBreeding(monster1.type)
    } else {
      child = createNewMonsterFromBreeding(monster2.type)
    }
    child.available = false
    owned.push(child)
  }
  const breederArr = [monster1, monster2]
  owned.find(monst => {
    if (monst.id === monster1.id) {
      monst.available = false
      monst.experience += 100
      checkMonsterLevel(monst)
      if (monst.stats.fer <= 45) {
        monst.stats.fer += 5
      }
    }
  })
  owned.find(monst => {
    if (monst.id === monster2.id) {
      monst.available = false
      monst.experience += 100
      checkMonsterLevel(monst)
      if (monst.stats.fer <= 45) {
        monst.stats.fer += 5
      }
    }
  })
}

export const endTurn = function() {
  for (let i = 0; i < owned.length; i++) {
    owned[i].available = true;
  }
}

//

export const monsterTypes = ['cow','horse','lion','wolf','cat','harpy','bear','unicorn','deer']

export const fNames = ['Mary','Anna','Emma','Elizabeth','Minnie','Margaret','Ida','Alice','Bertha','Sarah','Annie','Clara','Ella','Florence','Cora','Martha','Laura','Nellie','Grace','Carrie','Maude','Mabel','Bessie','Jennie','Gertrude','Julia','Hattie','Edith','Mattie','Rose','Catherine','Lillian','Ada','Lillie','Helen','Jessie','Louise','Ethel','Lula','Myrtle','Eva','Frances','Lena','Lucy','Edna','Maggie','Pearl','Daisy','Fannie','Josephine','Dora','Rosa','Katherine','Agnes','Marie','Nora','May','Mamie','Blanche','Stella','Ellen','Nancy','Effie','Sallie','Nettie','Della','Lizzie','Flora','Susie','Maud','Mae','Etta','Harriet','Sadie','Caroline','Katie','Lydia','Elsie','Kate','Susan','Mollie','Alma','Addie','Georgia','Eliza','Lulu','Nannie','Lottie','Amanda','Belle','Charlotte','Rebecca','Ruth','Viola','Olive','Amelia','Hannah','Jane','Virginia','Emily','Matilda','Irene','Kathryn','Esther','Willie','Henrietta','Ollie','Amy','Rachel','Sara','Estella','Theresa','Augusta','Ora','Pauline','Josie','Lola','Sophia','Leona','Anne','Mildred','Ann','Beulah','Callie','Lou','Delia','Eleanor','Barbara','Iva','Louisa','Maria','Mayme','Evelyn','Estelle','Nina','Betty','Marion','Bettie','Dorothy','Luella','Inez','Lela','Rosie','Allie','Millie','Janie','Cornelia','Victoria','Ruby','Winifred','Alta','Celia','Christine','Beatrice','Birdie','Harriett','Mable','Myra','Sophie','Tillie','Isabel','Sylvia','Carolyn','Isabelle','Leila','Sally','Ina','Essie','Bertie','Nell','Alberta','Katharine','Lora','Rena','Mina','Rhoda','Mathilda','Abbie','Eula','Dollie','Hettie','Eunice','Fanny','Ola','Lenora','Adelaide','Christina','Lelia','Nelle','Sue','Johanna','Lilly','Lucinda','Minerva','Lettie','Roxie','Cynthia','Helena','Hilda','Hulda']
export const mNames = ['Ben','Charley','Paul','Edgar','Isaac','Otto','Luther','Lawrence','Ira','Patrick','Guy','Oliver','Theodore','Hugh','Clyde','Alexander','August','Floyd','Homer','Jack','Leonard','Horace','Marion','Philip','Allen','Archie','Stephen','Chester','Willis','Raymond','Rufus','Warren','Jessie','Milton','Alex','Leo','Julius','Ray','Sidney','Bernard','Dan','Jerry','Calvin','Perry','Dave','Anthony','Eddie','Amos','Dennis','Clifford','Leroy','Wesley','Alonzo','Garfield','Franklin','Emil','Leon','Nathan','Harold','Matthew','Levi','Moses','Everett','Lester','Winfield','Adam','Lloyd','Mack','Fredrick','Jay','Jess','Melvin','Noah','Aaron','Alvin','Norman','Gilbert','Elijah','Victor','Gus','Nelson','Jasper','Silas','Jake','Christopher','Mike','Percy','Adolph','Maurice','Cornelius','Felix','Reuben','Wallace','Claud','Roscoe','Sylvester','Earnest','Hiram','Otis','Simon','Willard','Irvin','Mark','Jose','Wilbur','Abraham','Virgil','Clinton','Elbert','Leslie','Marshall','Owen','Wiley','Anton','Morris','Manuel','Phillip','Augustus','Emmett','Eli','Nicholas','Wilson','Alva','Harley','Newton','Timothy','Marvin','Ross','Curtis','Edmund','Jeff','Elias','Harrison','Stanley','Columbus','Lon','Ora','Ollie','Pearl','Russell','Solomon','Arch','Asa','Clayton','Enoch','Irving','Mathew','Nathaniel','Scott','Hubert','Lemuel','Andy','Ellis','Emanuel','Joshua','Millard','Vernon','Wade','Cyrus','Miles','Rudolph','Sherman','Austin','Bill','Chas','Lonnie','Monroe','Byron','Edd','Emery','Grant','Jerome','Max','Mose','Steve','Gordon','Abe','Pete','Chris','Clark','Gustave','Orville','Lorenzo','Bruce','Marcus','Preston','Bob','Dock','Donald','Jackson','Cecil','Barney','Delbert','Edmond','Anderson','Christian','Glenn','Jefferson','Luke','Neal','Burt']
export const lNames = ['Smith','Johnson','Williams','Brown','Jones','Miller','Davis','Garcia','Rodriguez','Wilson','Martinez','Anderson','Taylor','Thomas','Hernandez','Moore','Martin','Jackson','Thompson','White','Lopez','Lee','Gonzalez','Harris','Clark','Lewis','Robinson','Walker','Perez','Hall','Young','Allen','Sanchez','Wright','King','Scott','Green','Baker','Adams','Nelson','Hill','Ramirez','Campbell','Mitchell','Roberts','Carter','Phillips','Evans','Turner','Torres','Parker','Collins','Edwards','Stewart','Flores','Morris','Nguyen','Murphy','Rivera','Cook','Rogers','Morgan','Peterson','Cooper','Reed','Bailey','Bell','Gomez','Kelly','Howard','Ward','Cox','Diaz','Richardson','Wood','Watson','Brooks','Bennett','Gray','James','Reyes','Cruz','Hughes','Price','Myers','Long','Foster','Sanders','Ross','Morales','Powell','Sullivan','Russell','Ortiz','Jenkins','Gutierrez','Perry','Butler','Barnes','Fisher','Henderson','Coleman','Simmons','Patterson','Jordan','Reynolds','Hamilton','Graham','Kim','Gonzales','Alexander','Ramos','Wallace','Griffin','West','Cole','Hayes','Chavez','Gibson','Bryant','Ellis','Stevens','Murray','Ford','Marshall','Owens','Mcdonald','Harrison','Ruiz','Kennedy','Wells','Alvarez','Woods','Mendoza','Castillo','Olson','Webb','Washington','Tucker','Freeman','Burns','Henry','Vasquez','Snyder','Simpson','Crawford','Jimenez','Porter','Mason','Shaw','Gordon','Wagner','Hunter','Romero','Hicks','Dixon','Hunt','Palmer','Robertson','Black','Holmes','Stone','Meyer','Boyd','Mills','Warren','Fox','Rose','Rice','Moreno','Schmidt','Patel','Ferguson','Nichols','Herrera','Medina','Ryan','Fernandez','Weaver','Daniels','Stephens','Gardner','Payne','Kelley','Dunn','Pierce','Arnold','Tran','Spencer','Peters','Hawkins','Grant','Hansen','Castro','Hoffman','Hart','Elliott','Cunningham','Knight','Bradley']

export const newMonster = function(type, name) {
	this.id = Math.random().toString(36).substr(2, 12)
	this.name = name
	this.type = type
	this.gender = getNewGender(type)
	this.stats = getNewStats(type)
	this.experience = 0
	this.level = 0
	this.price = 0
	this.traits = getNewTrait()
	this.image = `/images/${type}.jpg`
	this.available = true;
	this.level = 0
}

export const traits = {
	Abrasive: {
		name: 'Abrasive',
		chance: 0.08,
		description: 'Difficult and demanding in conversation and behavior',
		bonus: {
			cha: 0.8,
		}
	},
	Aggressive: {
		name: 'Aggressive',
		chance: 0.08,
		description: 'Might makes right. Monsters with this trait always look to prove that.',
		bonus: {
			int: 0.7,
			wis: 0.9,
			str: 1.2,
		}
	},
	Brawler: {
		name: 'Brawler',
		chance: 0.04,
		description: 'Very physical. They tend to grab, grapple and punch already in the crib.',
		bonus: {
			con: 1.3,
			dex: 1.1,
		}
	},
	Cautious: {
		name: 'Cautious',
		chance: 0.08,
		description: 'May come off as cowardly. But maybe it\'s just "live to fight another day".',
		bonus: {
			wis: 1.1,
		}
	},
	Charming: {
		name: 'Charming',
		chance: 0.04,
		description: 'Can sweet talk nearly anybody into anything.',
		bonus: {
			cha: 1.3,
		}
	},
	Detached: {
		name: 'Detached',
		chance: 0.08,
		description: 'Just doesn\'t give a crap.',
		bonus: {
			wis: 1.1,
			cha: 0.9,
		}
	},
	Dishonest: {
		name: 'Dishonest',
		chance: 0.08,
		description: 'Naturally deceitful and insincere with others, a talent for lying.',
		bonus: {
			cha: 1.1,
			price: 0.8,
		}
	},
	Distinctive: {
		name: 'Distinctive',
		chance: 0.04,
		description: 'They stand out in a crowd and other\'s will remember them.',
		bonus: {
			price: 1.05,
		}
	},
	Easygoing: {
		name: 'Easygoing',
		chance: 0.02,
		description: 'Naturally friendly. Others feel comfortable around them.',
		bonus: {
			cha: 1.3,
			price: 1.2,
		}
	},
	Focused: {
		name: 'Focused',
		chance: 0.04,
		description: 'They can keep their attention on any task despite many distractions.',
		bonus: {
			con: 1.1,
			int: 1.1,
			wis: 1.1,
		}
	},
	Hardy: {
		name: 'Hardy',
		chance: 0.08,
		description: 'Made of tougher stuff than the average monster.',
		bonus: {
			con: 1.2,
			fer: 0.9,
		}
	},
	Honest: {
		name: 'Honest',
		chance: 0.08,
		description: 'Naturally straightforward and sincere. They might not be liked but they will be trusted.',
		bonus: {
			cha: 0.9,
			wis: 1.2,
		}
	},
	Huge: {
		name: 'Huge',
		chance: 0.02,
		description: 'Just a lot bigger than average',
		bonus: {
			con: 1.3,
			str: 1.2,
			dex: 0.7,
		}
	},
	Inattentive: {
		name: 'Inattentive',
		chance: 0.08,
		description: 'Quick to do simple things but just no ability to maintain focus.',
		bonus: {
			con: 0.9,
			int: 0.9,
			dex: 1.1,
		}
	},
	Infertile: {
		name: 'Infertile',
		chance: 0.04,
		description: 'Might as they try, making babies is just not their thing.',
		bonus: {
			fer: 0,
		}
	},
	Muscular: {
		name: 'Muscular',
		chance: 0.08,
		description: 'Packed with muscle all around. Stronger but not necessarly smarter.',
		bonus: {
			str: 1.3,
			dex: 0.8,
			price: 1.1,
		}
	},
	Passionate: {
		name: 'Passionate',
		chance: 0.08,
		description: 'Passionate about everything they do - for good and bad.',
		bonus: {
			con: 1.2,
			int: 0.8,
			price: 1.1,
		}
	},
	Plucky: {
		name: 'Plucky',
		chance: 0.04,
		description: 'A strength of will seldom found.',
		bonus: {
			con: 1.2,
			wis: 1.2,
		}
	},
	Polite: {
		name: 'Polite',
		chance: 0.08,
		description: 'Minding their manners. Soft-spoken, good company for the right people.',
		bonus: {
			int: 1.2,
			con: 0.8,
			price: 1.3,
		}
	},
	Quick: {
		name: 'Quick',
		chance: 0.04,
		description: 'Quick of mind and body',
		bonus: {
			str: 0.8,
			con: 0.8,
			dex: 1.3,
			int: 1.3,
		}
	},
	Reckless: {
		name: 'Reckless',
		chance: 0.02,
		description: 'What? What danger are you talking about?',
		bonus: {
			wis: 0.7,
		}
	},
	Relentless: {
		name: 'Relentless',
		chance: 0.08,
		description: 'They don\'t know the meaning of the word "tired." Always all out until they simply can\'t continue.',
		bonus: {
			con: 1.4,
			wis: 0.7,
		}
	},
	Skinny: {
		name: 'Skinny',
		chance: 0.08,
		description: 'All skin and bones',
		bonus: {
			con: 0.7,
		}
	},
	Tiny: {
		name: 'Tiny',
		chance: 0.04,
		description: 'Teensy Weensy. Much smaller than normal.',
		bonus: {
			con: 0.7,
			str: 0.8,
			dex: 1.4,
		}
	},
	Fertile: {
		name: 'Fertile',
		chance: 0.02,
		description: 'Making babies left and right.',
		bonus: {
			fer: 1.5
		}
	},
	Valuable: {
		name: 'Valuable',
		chance: 0.04,
		description: 'For some reason monsters with this trait seem to get a better price.',
		bonus: {
			price: 1.3
		}
	},
	Radiant: {
		name: 'Radiant',
		chance: 0.02,
		description: 'Everything about them is shiny. And people like shiny things.',
		bonus: {
			cha: 1.4,
			price: 1.1,
		}
	},
}

export const wares = createStoreOffer(6)
export const owned = createOwned(4)
