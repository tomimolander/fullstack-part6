import { setNotification } from './notificationReducer'
import anecdotesService from '../services/anecdotes'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = [], action) => {
  //console.log('state now: ', state)
  //console.log('action', action)
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecToChange = state.find(n => n.id === id)
      const changedAnec = { 
        ...anecToChange, 
        votes: anecToChange.votes+1 
      }
      return state.map(anec =>
        anec.id !== id ? anec : changedAnec 
      )
    case 'NEW_ANEC':
      const anec = action.data
      return [...state, anec]
    case 'INIT_ANECS':
      return action.data
    default: return state
  }
}

export const createAnec = (data) => {
  return async dispatch => {
    const newAnec = await anecdotesService.createNew(data)
    dispatch({
      type: 'NEW_ANEC',
      data: newAnec,
    })
  }
}

export const toggleVote = (anec) => {
  const changedAnec = { 
    ...anec, 
    votes: anec.votes+1 
  }
  return async dispatch => {
    const anecs = await anecdotesService.update(changedAnec.id, changedAnec)
    dispatch({
      type: 'VOTE',
      data: anecs,
    })
  }
}

export const initializeAnecs = (anecs) => {
  return async dispatch => {
    const anecs = await anecdotesService.getAll()
    dispatch({
      type: 'INIT_ANECS',
      data: anecs,
    })
  }
}

export default reducer