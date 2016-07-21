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
