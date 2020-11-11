import React, { useContext } from "react";
import AddToWatchListButton from '../components/buttons/addToWatchList';
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'

const UpcomingMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.movies.filter((m) => {  // New
    return !("watchlist" in m);
  });

  return (
      <PageTemplate
        title='Discover Movies'
        movies={movies}
        action={(movie) => {
          return <AddToWatchListButton movie={movie} />;
        }}
      />
  );
};

export default UpcomingMoviePage;