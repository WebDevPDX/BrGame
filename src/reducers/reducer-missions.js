import _ from 'lodash'

const Missions = [
  [
    {
      required: {
        type: 'horse',
        level: 3,
      },
      reward: 1000,
      complete: false,
      logo: '/images/empire.jpg',
    },
    {
      required: {
        type: 'bear',
        level: 5,
      },
      reward: 1500,
      complete: false,
      logo: '/images/empire.jpg',
    },
    {
      required: {
        type: 'cow',
        level: 8,
        stats: {
          int: 10,
          wis: 10,
        },
      },
      reward: 3000,
      complete: false,
      logo: '/images/empire.jpg',
    },
  ],
  [
    {
      required: {
        type: 'wolf',
        level: 4,
      },
      reward: 1100,
      complete: false,
      logo: '/images/alliance.jpg',
    },
    {
      required: {
        type: 'unicorn',
        level: 5,
      },
      reward: 1800,
      complete: false,
      logo: '/images/alliance.jpg',
    },
    {
      required: {
        type: 'cat',
        level: 10,
        stats: {
          dex: 12,
          con: 10,
        },
      },
      reward: 3000,
      complete: false,
      logo: '/images/alliance.jpg',
    },
  ],
  [
    {
      required: {
        type: 'harpy',
        level: 2,
      },
      reward: 800,
      complete: false,
      logo: '/images/brotherhood.jpg',
    },
    {
      required: {
        type: 'deer',
        level: 6,
      },
      reward: 1300,
      complete: false,
      logo: '/images/brotherhood.jpg',
    },
    {
      required: {
        type: 'cat',
        level: 12,
        stats: {
          dex: 15,
          con: 10,
          cha: 12,
        },
      },
      reward: 3000,
      complete: false,
      logo: '/images/brotherhood.jpg',
    },
  ],
  [
    {
      required: {
        type: 'cow',
        level: 6,
        stats: {
          wis: 10,
        },
      },
      reward: 1400,
      complete: false,
      logo: '/images/church.jpg',
    },
    {
      required: {
        type: 'lion',
        level: 18,
      },
      reward: 5000,
      complete: false,
      logo: '/images/church.jpg',
    },
    {
      required: {
        type: 'unicorn',
        level: 25,
        stats: {
          int: 45,
        },
      },
      reward: 10000,
      complete: false,
      logo: '/images/church.jpg',
    },
  ],
  [
    {
      required: {
        type: 'horse',
        level: 8,
      },
      reward: 1200,
      complete: false,
      logo: '/images/syndicate.jpg',
    },
    {
      required: {
        type: 'wolf',
        level: 8,
        stats: {
          str: 10,
          dex: 10,
          con: 10,
        },
      },
      reward: 3000,
      complete: false,
      logo: '/images/syndicate.jpg',
    },
    {
      required: {
        type: 'bear',
        stats: {
          str: 25,
          con: 25,
          cha: 25,
        },
      },
      reward: 10000,
      complete: false,
      logo: '/images/syndicate.jpg',
    },
  ]
]

export default function(state = Missions, action) {
	return state
}

// Model for mission requirements
// {
//   required: {
//     type: ,
//     level: ,
//     gender: ,
//     stats: {
//       str: ,
//       dex: ,
//       con: ,
//       int: ,
//       wis: ,
//       cha: ,
//       fer: ,
//     },
//     traits: {
//       name: ,
//     }
//   },
//   reward: ,
//   complete: false,
// },
