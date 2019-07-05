const motorcycles = require("./motorcycles");

const resolvers = {
  Query: {
    motorcycles: (obj, args, context, info) => motorcycles()
  }
};

module.exports = resolvers;
