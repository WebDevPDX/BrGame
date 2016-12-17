export default function reducer(state, action) {
  switch (action.type) {
    case 'SHOW_DETAILS':
      Object.assign({}, state, {
        monster: {
          id: action.monster
        }
      })
    default:
      return state
  }
}
