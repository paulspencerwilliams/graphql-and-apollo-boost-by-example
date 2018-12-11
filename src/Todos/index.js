import React from 'react'
import { Query } from 'react-apollo'
import Todo from './Todo'
import gql from 'graphql-tag'
import { PropTypes } from 'prop-types'

const TodosView = ({ error, loading, todos }) => {
  if (loading) return <div>Loading</div>
  if (error) return <div>Error</div>
  return todos.map(todo => (
    <Todo
      key={todo.id}
      title={todo.title}
      id={todo.id}
      completed={todo.completed}
    />
  ))
}

const GET_TODOS = gql`
  query {
    allTodos {
      id
      title
      completed @client
    }
  }
`

TodosView.propTypes = {
  todos: PropTypes.array,
}

const Todos = () => (
  <Query query={GET_TODOS}>
    {({ data: { allTodos = [] }, error, loading }) => (
      <TodosView error={error} loading={loading} todos={allTodos} />
    )}
  </Query>
)
export default Todos
