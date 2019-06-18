export default`
  type Motorcycle {
    id: ID!
    make: String!
    model: String!
  }

  type Entry {
    id: ID!
    make: String!
    model: String!
    motorcycleId: ID!
    motorcycle: Motorcycle!
  }

  type Query {
    entries: [Entry!]!
    entry(id: ID!): Entry
    author(id: ID!): Author
    authors: [Author!]!    
  }

  type Mutation {
    createEntry(make: String, model: String, motorcycleId: ID!): Entry!
    updateEntry(id: ID!, make: String, model: String!): [Int!]!
    deleteEntry(id: ID!): Int!
  }
`