const resolver = {
  Query: {
    motorcycles: (obj, args, context, info) => context.findAll()
  }
};

module.exports = resolver;
