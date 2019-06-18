export default {
  Motorcycle: {
    entries: (parent, args, context, info) => parent.getEntries()
  },
  Entry: {
    entries: (parent, args, context, info) => parent.getMotorcycle()
  },
  Query: {
    entries: (parent, args, { db }, info) => db.entry.findAll(),
    motorcycles: (parent, args, { db }, info) => db.motorcycle.findAll(),
    entry: (parent, args, { db }, info) => db.entry.findById(id),
    motorcycle: (parent, args, { db }, info) => db.motorcycle.findById(id)
  },
  Mutation: {
    createEntry: (parent, { make, model, motorcycleId }, { db }, info) =>
      db.entry.create({
        id: motorcycleId,
        make,
        model
      }),
    updateeEntry: (parent, { make, model, id }, { db }, info) =>
      db.entry.update(
        {
          make,
          model
        },
        {
          where: {
            id
          }
        }
      ),
    deleteEntry: (parent, { id }, { db }, info) =>
      db.entry.destroy({
        where: {
          id
        }
      })
  }
};
