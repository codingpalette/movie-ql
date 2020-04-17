const lee = {
  name: '이성재',
  age: 27,
  gender: 'female',
};

const resolvers = {
  Query: {
    person: () => lee,
  },
};

module.exports = resolvers;
