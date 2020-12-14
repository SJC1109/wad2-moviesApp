import React, {useEffect, useState} from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";
import {getMovieCredits} from '../api/tmdb-api'
import SimilarMovies from "../components/similarMovies";
import MovieCredits from "../components/movieCredits";

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id)  
  const [setCasts] = useState([])

  useEffect(()=>{
    getMovieCredits(id).then(setCasts)
  },[id])

  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
       <space>
        <div className="row" >
          <div className="col-12  btn-group btn-group-justified " >
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary  "
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary "
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
            {!props.history.location.pathname.endsWith("/credits") ? (
              <Link
                className="btn btn-primary "
                to={`/movies/${id}/credits`}
              >
                Show Credits
              </Link>
            ) : (
              <Link
                className="btn btn-primary "
                to={`/movies/${id}`}
              >
                Hide Credits
              </Link>
            )}

            {!props.history.location.pathname.endsWith("/similar") ? (
              <Link
                className="btn btn-primary "
                to={`/movies/${id}/similar`}
              >
                Show SimilarMovies
              </Link>
            ) : (
              <Link
                className="btn btn-primary "
                to={`/movies/${id}`}
              >
                Hide SimilarMovies
              </Link>
            )}
          </div>
        </div>
        </space>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
        <Route
          path={`/movies/:id/credits`}
          render={props => <MovieCredits movie={movie} {...props} />}
        />
        <Route
          path={`/movies/:id/similar`}
          render={props => <SimilarMovies movie={movie} {...props} />}
        />
       
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);