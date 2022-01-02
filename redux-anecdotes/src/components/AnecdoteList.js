import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleVote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
  return(
    <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={handleClick}>vote</button>
        </div>
    </div>
  )
}

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const filter = useSelector(state => state.filter)
  const anecdotes = useSelector(state => state.anecdotes).filter( anec => anec.content.toLowerCase().includes(filter.toLowerCase()))
  
  return(
    <div>
      {anecdotes.sort((a,b) => b.votes - a.votes).map(anec =>
        <Anecdote
          key={anec.id}
          anecdote={anec}
          handleClick={() => {
            dispatch(toggleVote(anec.id))
            dispatch(setNotification(`you voted '${anec.content}'`))
            setTimeout(() => {
              dispatch(setNotification(null))
            }, 5000)
            }
          }
        />
      )}
    </div>
  )
}

export default AnecdoteList