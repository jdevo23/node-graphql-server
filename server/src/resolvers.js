const resolver = {
  Query: {
    motorcycles: (parent, args, { db }, info) => db.motorcycle.findAll()
  }
};

module.exports = resolver;
