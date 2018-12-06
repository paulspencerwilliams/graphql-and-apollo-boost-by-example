import React from 'react'
import './App.css'
import Todos from './Todos'
import Counter from './Counter'
import Increment from './Increment'
import Decrement from './Decrement'
import AddTodo from './AddTodo'

export default () => (
  <div>
    <Counter />
    <Increment />
    <Decrement />
    <AddTodo />
    <Todos />
  </div>
)
