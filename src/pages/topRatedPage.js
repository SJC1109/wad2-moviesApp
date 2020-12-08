import React, { useContext } from "react";
import AddToTopListButton from '../components/buttons/addToTopList';
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'

const TopratedPage = () => {
  const context = useContext(MoviesContext);
  const top_rated = context.top_rated.filter((m) => {  // New
    return !("toplist" in m);
  });

  return (
      <PageTemplate
        title='Top Rated'
        movies={top_rated}
        action={(movie) => {
          return <AddToTopListButton movie={movie} />;
        }}
      />
  );
};

export default TopratedPage;