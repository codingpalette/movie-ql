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

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  // console.log(filteredMovies[0]);
  return filteredMovies[0];
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: parseInt(`${movies.length + 1}`),
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
