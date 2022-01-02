const initialState = null
  
const reducer = (state = initialState, action) => {
  console.log('state now not: ', state)
  console.log('action not', action)
  switch (action.type) {
    case 'SET':
        return action.data
    case 'CLEAR':
        return action.data
    default: return state
  }
}

export const setNotification = (msg) => {
    return {
      type: 'SET',
      data: msg
    }
}

export default reducer