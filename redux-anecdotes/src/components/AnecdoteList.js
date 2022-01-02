import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleVote } from '../reducers/anecdoteReducer'

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
  const anecdotes = useSelector(state => state)

  return(
    <div>
      {anecdotes.sort((a,b) => b.votes - a.votes).map(anec =>
        <Anecdote
          key={anec.id}
          anecdote={anec}
          handleClick={() => 
            dispatch(toggleVote(anec.id))
          }
        />
      )}
    </div>
  )
}

export default AnecdoteList