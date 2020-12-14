import React from "react";
import PageTemplate from '../components/templateMoviePage'
import MovieCast from "../pages/creditPage";

const MovieCastsPage = (props) => {
  return (
      <PageTemplate movie={props.location.state.movie}>
        <MovieCast cast={props.location.state.cast} /> 
      </PageTemplate>
  );
};

export default MovieCastsPage;