import { PropTypes } from 'prop-types'
import React from 'react'

const Todo = ({ title }) => <div>{title}</div>

Todo.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Todo
