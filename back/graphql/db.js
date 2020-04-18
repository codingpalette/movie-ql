let movies = [
  {
    id: 1,
    name: '스타워즈',
    score: 1,
  },
  {
    id: 2,
    name: '라라랜드',
    score: 8,
  },
  {
    id: 3,
    name: '어벤져스',
    score: 7,
  },
  {
    id: 4,
    name: '데스노트',
    score: 5,
  },
  {
    id: 5,
    name: '조커',
    score: 8,
  },
];

const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === String(id));
  // console.log(filteredMovies[0]);
  return filteredMovies[0];
};

const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};

module.exports.getMovies = movies;
module.exports.getById = getById;
module.exports.deleteMovie = deleteMovie;
module.exports.addMovie = addMovie;
