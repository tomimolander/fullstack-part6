const initialState = ''
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
        return action.data
    default: return state
  }
}

export const setFilter = (msg) => {
    return {
      type: 'SET_FILTER',
      data: msg
    }
}

export default reducer