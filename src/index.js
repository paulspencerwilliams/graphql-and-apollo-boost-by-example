import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import ApolloProvider from 'react-apollo/ApolloProvider'

const URI = 'https://fakerql.com/graphql'
const client = new ApolloClient({
  uri: URI,
})
client
  .query({
    query: gql`
      query {
        allTodos {
          id
          title
        }
      }
    `,
  })
  .then(result => console.log(result))

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
