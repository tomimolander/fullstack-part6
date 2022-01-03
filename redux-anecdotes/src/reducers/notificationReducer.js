const initialState = null
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET':
        return action.data
    case 'CLEAR':
        return action.data
    default: return state
  }
}

export const setNotification = (msg, time) => {
  return async dispatch => {
    dispatch({
      type: 'SET',
      data: msg
    })
    setTimeout(() => {
      dispatch({
        type: 'SET',
        data: null
      })
    }, time*1000)
  }
}

export default reducer