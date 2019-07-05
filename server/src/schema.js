const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    motorcycles: [Motorcycle]!
  }

  type Motorcycle {
    id: ID!
    make: String
    model: String
  }
`;

module.exports = typeDefs;
