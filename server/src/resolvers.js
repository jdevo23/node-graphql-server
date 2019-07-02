const resolvers = {
  Query: {
    me: () => {
      return {
        username: 'jdevo23'
      }
    },
  },
}

module.exports = resolvers