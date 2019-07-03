const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    motorcycles: [Motorcycle]!
    motorcycle(id: ID!): Motorcycle
  }

  type Motorcycle {
    id: ID!
    make: String
    model: String
  }
`;

module.exports = typeDefs;
