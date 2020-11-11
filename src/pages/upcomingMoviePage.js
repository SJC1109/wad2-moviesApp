import React, { useState, useEffect } from "react";
import AddToFavoriteButton from '../components/buttons/addToFavorites';
import PageTemplate from '../components/templateMovieListPage'
import { getUpcomingMovies } from "../api/tmdb-api";

const UpcomingMoviePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getUpcomingMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  

  return (
      <PageTemplate
        title='Discover Movies'
        movies={movies}
        action={(movie) => {
          return <AddToFavoriteButton movie={movie} />;
        }}
      />
  );
};

export default UpcomingMoviePage;