import React from 'react'
import { connect } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch()

  const addAnec = async (event) => {
    event.preventDefault()
    const content = event.target.anec.value
    event.target.anec.value = ''
    props.createAnec(content)
    props.setNotification(`you created '${content}'`, 5)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnec}>
        <input name="anec" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

const ConnectedAnecdoteForm = connect(
  null,
  { createAnec, setNotification } 
  )(AnecdoteForm)

export default ConnectedAnecdoteForm