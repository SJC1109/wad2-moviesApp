import React, { useContext } from "react";
import AddToNow_playingButton from '../components/buttons/addToNow_playing';
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'

const Now_playingMoviePage = () => {
  const context = useContext(MoviesContext);
  const movies = context.now_playing.filter((m) => {  // New
    return !("now_playing" in m);
  });

  return (
      <PageTemplate
        title='Discover Movies'
        movies={movies}
        action={(movie) => {
          return <AddToNow_playingButton movie={movie} />;
        }}
      />
  );
};

export default Now_playingMoviePage;