import _ from 'lodash'

const missions = {
  picked: {},
  matched: [],
  list: [
    [
      {
        required: {
          type: 'horse',
          level: 3,
        },
        reward: 1000,
        complete: false,
        logo: '/images/empire.jpg',
        id: '00',
      },
      {
        required: {
          type: 'bear',
          level: 5,
        },
        reward: 1500,
        complete: false,
        logo: '/images/empire.jpg',
        id: '01',
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
        id: '02',
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
        id: '10',
      },
      {
        required: {
          type: 'unicorn',
          level: 5,
        },
        reward: 1800,
        complete: false,
        logo: '/images/alliance.jpg',
        id: '11',
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
        id: '12',
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
        id: '20',
      },
      {
        required: {
          type: 'deer',
          level: 6,
        },
        reward: 1300,
        complete: false,
        logo: '/images/brotherhood.jpg',
        id: '21',
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
        id: '22',
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
        id: '30',
      },
      {
        required: {
          type: 'lion',
          level: 18,
        },
        reward: 5000,
        complete: false,
        logo: '/images/church.jpg',
        id: '31',
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
        id: '32',
      },
    ],
    [
      {
        required: {
          type: 'horse',
          level: 1,
        },
        reward: 1200,
        complete: false,
        logo: '/images/syndicate.jpg',
        id: '40',
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
        id: '41',
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
        id: '42',
      },
    ]
  ]
}

export default function(state = missions , action) {
  const cloned = _.cloneDeep(action.payload)
  switch (action.type) {
    case 'PICKED_MISSION_UPDATE':
      cloned.missions.picked = {}
      cloned.missions.picked = Object.assign({}, cloned.picked)
      cloned.missions.matched = []
      cloned.owned.forEach(monster => {
        if (monster.type === cloned.picked.required.type && monster.level >= cloned.picked.required.level) {
          let check = true
          if (cloned.picked.required.stats) {
            Object.keys(cloned.picked.required.stats).forEach(stat => {
              if (monster.stats[stat] >= cloned.picked.required.stats[stat]) {
                check = true
              } else {
                check = false
                return
              }
            })
            if (check) {
              cloned.missions.matched.push(monster)
            }
          } else {
            cloned.missions.matched.push(monster)
          }
        }
      })
      return cloned.missions
    case 'COMPLETE_CONTRACT':
      console.log(cloned)
      const id = cloned.missions.picked.id;
      console.log(id)
      cloned.missions.list.forEach((faction, facId) => {
        faction.forEach((mission, misId) => {
          if (id === mission.id) {
            cloned.missions.list[facId].splice(misId, 1)
            return
          }
        })
      })
      console.log(cloned.missions.list)
      cloned.missions.matched = []
      cloned.missions.picked = {}
      return cloned.missions
    default:
      return state
  }
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
