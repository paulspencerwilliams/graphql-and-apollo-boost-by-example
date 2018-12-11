import { PropTypes } from 'prop-types'
import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const TodoView = ({ completed, title, onClick }) => (
  <div
    onClick={onClick}
    style={{ textDecoration: completed ? 'line-through' : 'none' }}
  >
    {title}
  </div>
)

TodoView.propTypes = {
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
}

const TOGGLE_TODO = gql`
  mutation ToggleTodo($id: String!) {
    toggleTodo(id: $id) @client
  }
`

const Todo = ({ completed, id, title }) => (
  <Mutation mutation={TOGGLE_TODO} variables={{ id }}>
    {toggleTodo => (
      <TodoView completed={completed} title={title} onClick={toggleTodo} />
    )}
  </Mutation>
)

export default Todo
