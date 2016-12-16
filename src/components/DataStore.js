import { getNewStats, getNewGender, getNewTrait, createStoreOffer } from './calculations'

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
	this.experience = null
	this.level = 0
	this.price = 0
	this.traits = getNewTrait()
	this.image = `images/${type}.jpg`
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