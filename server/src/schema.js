const { gql } = require('apollo-server')
const typeDefs = gql`
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

module.exports = typeDefs