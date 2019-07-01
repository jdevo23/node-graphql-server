const { gql } = require('apollo-server')
const defs = gql`
  type Query {
    motorcycles: [Motorcycle]!
    motorcycle(id: ID!): Motorcycle
    me: User
  }

  type Motorcycle {
    id: ID!
    make: String
    model: String
  }

  type User {
    id: ID!
    email: String!
  }
`

const typeDefs = gql`
  type Query {
    me: User
  }

  type User {
    username: String!
  }
`

module.exports = typeDefs