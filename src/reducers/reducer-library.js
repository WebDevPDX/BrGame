import _ from 'lodash'

const library = {
  'how to play': {
    'goal': "Your goal is to build a thriving monster farm and breed the perfect monster. Along the way you might want to build up reputation with the different factions in game and solve the quests that come your way.",
    'farm': "The farm screen offers you an overview. You can see what year and time of year it is, what the status of your farm is and an accounting overview for the last season. It also allows you to select the level of food and medical care you provide your monsters. Low grade food will impact mood of your monsters whereas high grade food will have a positive impact on fertility. Low grade medical care will negatively impact fertility and great medical care will positively impact your monsters' development. (Medical and Food impacts have not yet been added.)",
    'breeding': "This is the screen where you do most of your work as a monster breeder. Select any two monsters and they will breed. Based on their fertility, they will produce offspring. After every breeding attempt fertility increases as well as level and stats. The offspring's stats and traits will be based on both parents stats and traits. And yes, you can send monsters of the same sex to mate but they will be unable to produce offspring.",
    'Town Buy Monster': 'Here you can look through the monsters that are for sale and you can buy them to add them to your farm. The price is based on the monsters stats and traits. The wares will refresh once every spring.',
    'Town Sell Monsters': 'For now this is the only way to turn a profit. Sales price of the monster is determined based on it\'s stats and traits.',
    'Library':'Well, you are here, so I guess you figured that part out.'
  },
	monsters: {
    horse: "HORSE Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus tempore delectus voluptatibus, incidunt enim eveniet ab voluptates debitis expedita optio nemo ipsum quo deleniti hic nostrum? Libero sed odit iste deserunt enim, maxime, porro saepe. Porro fugit quam maiores praesentium explicabo possimus eaque eveniet obcaecati, ad deserunt magni illo odit, sunt placeat. Facilis, porro, quibusdam sunt odit ratione delectus, illo accusantium aspernatur nulla molestias eos velit, consequuntur! Optio sunt, aut modi consequatur accusamus illum doloremque corrupti reprehenderit suscipit omnis porro blanditiis, repudiandae sed possimus minima, ut sint at laudantium, quam. Amet ab consectetur doloremque, sapiente eos quis aspernatur architecto!",
    cat: "CAT Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus tempore delectus voluptatibus, incidunt enim eveniet ab voluptates debitis expedita optio nemo ipsum quo deleniti hic nostrum? Libero sed odit iste deserunt enim, maxime, porro saepe. Porro fugit quam maiores praesentium explicabo possimus eaque eveniet obcaecati, ad deserunt magni illo odit, sunt placeat. Facilis, porro, quibusdam sunt odit ratione delectus, illo accusantium aspernatur nulla molestias eos velit, consequuntur! Optio sunt, aut modi consequatur accusamus illum doloremque corrupti reprehenderit suscipit omnis porro blanditiis, repudiandae sed possimus minima, ut sint at laudantium, quam. Amet ab consectetur doloremque, sapiente eos quis aspernatur architecto!",
    bear: "BEAR Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus tempore delectus voluptatibus, incidunt enim eveniet ab voluptates debitis expedita optio nemo ipsum quo deleniti hic nostrum? Libero sed odit iste deserunt enim, maxime, porro saepe. Porro fugit quam maiores praesentium explicabo possimus eaque eveniet obcaecati, ad deserunt magni illo odit, sunt placeat. Facilis, porro, quibusdam sunt odit ratione delectus, illo accusantium aspernatur nulla molestias eos velit, consequuntur! Optio sunt, aut modi consequatur accusamus illum doloremque corrupti reprehenderit suscipit omnis porro blanditiis, repudiandae sed possimus minima, ut sint at laudantium, quam. Amet ab consectetur doloremque, sapiente eos quis aspernatur architecto!",
    unicorn: "UNICORN Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate ducimus tempore delectus voluptatibus, incidunt enim eveniet ab voluptates debitis expedita optio nemo ipsum quo deleniti hic nostrum? Libero sed odit iste deserunt enim, maxime, porro saepe. Porro fugit quam maiores praesentium explicabo possimus eaque eveniet obcaecati, ad deserunt magni illo odit, sunt placeat. Facilis, porro, quibusdam sunt odit ratione delectus, illo accusantium aspernatur nulla molestias eos velit, consequuntur! Optio sunt, aut modi consequatur accusamus illum doloremque corrupti reprehenderit suscipit omnis porro blanditiis, repudiandae sed possimus minima, ut sint at laudantium, quam. Amet ab consectetur doloremque, sapiente eos quis aspernatur architecto!",
  },
  traits: {
    Abrasive: {
  		name: 'Abrasive',
  		chance: 0.08,
  		description: 'Difficult and demanding in conversation and behavior.',
      changes: 'Lowers Charisma',
  	},
  	Aggressive: {
  		name: 'Aggressive',
  		chance: 0.08,
  		description: 'Might makes right. Monsters with this trait always look to prove that.',
      changes: 'Lowers Intelligence and Wisdom. Increases Strength.',
  	},
  	Brawler: {
  		name: 'Brawler',
  		chance: 0.04,
  		description: 'Very physical. They tend to grab, grapple and punch already in the crib.',
      changes: 'Increases Constitution and Dexterity.',
  	},
  	Cautious: {
  		name: 'Cautious',
  		chance: 0.08,
  		description: 'May come off as cowardly. But maybe it\'s just "live to fight another day".',
      changes: 'Increases Wisdom.',
  	},
  	Charming: {
  		name: 'Charming',
  		chance: 0.04,
  		description: 'Can sweet talk nearly anybody into anything.',
      changes: 'Increases Charisma.',
  	},
  	Detached: {
  		name: 'Detached',
  		chance: 0.08,
  		description: 'Just doesn\'t give a crap.',
      changes: 'Lowers Charisma. Increases Wisdom.',
  	},
  	Dishonest: {
  		name: 'Dishonest',
  		chance: 0.08,
  		description: 'Naturally deceitful and insincere with others, a talent for lying.',
      changes: 'Lowers sales price. Increases Charisma.',
  	},
  	Distinctive: {
  		name: 'Distinctive',
  		chance: 0.04,
  		description: 'They stand out in a crowd and other\'s will remember them.',
      changes: 'Increases sales price slightly.',
  	},
  	Easygoing: {
  		name: 'Easygoing',
  		chance: 0.02,
  		description: 'Naturally friendly. Others feel comfortable around them.',
      changes: 'Increases Charisma and sales price.',
  	},
  	Focused: {
  		name: 'Focused',
  		chance: 0.04,
  		description: 'They can keep their attention on any task despite many distractions.',
      changes: 'Increases Constitution, Intelligence and Wisom.',
  	},
  }
}

export default function(state = library, action) {
	return state
}
