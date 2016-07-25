/*
const judge = (state, action) => {
  switch (action.type) {
    case 'CHANGE_FLAG':
      return {
        flag: action.flag
      }
    default:
      return state
  }
}

export default judge
*/

const user = {
  user: {
    name: '山田太郎',
    age: '19',
    skill: '寝る'
  }
}

export default function counter(state = {test: 'サンプルです'}, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'BURST':
    return state + 100
    case 'USER_DATA':
    return Object.assign({}, state, user)
    default:
      return state
  }
}
