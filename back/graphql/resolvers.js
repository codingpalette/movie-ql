import { getMovies } from './db';

const resolvers = {
  Query: {
    movies: (_, { rating, limit }) => getMovies(limit, rating),
  },
};

module.exports = resolvers;
