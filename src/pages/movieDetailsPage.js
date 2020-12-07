import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";

const MoviePage = props => {
  const { id } = props.match.params;
  const [movie] = useMovie(id);
    // NEW
  return (
    <>
    {movie ? (
      <>
        <PageTemplate movie={movie}>
          <MovieDetails movie={movie} />
        </PageTemplate>
        <div className="row">
          <div className="col-12 ">
            {!props.history.location.pathname.endsWith("/reviews") ? (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}/reviews`}
              >
                Show Reviews (Extracts)
              </Link>
            ) : (
              <Link
                className="btn btn-primary btn-block active"
                to={`/movies/${id}`}
              >
                Hide Reviews 
              </Link>
            )}
          </div>
        </div>
        <Route
          path={`/movies/:id/reviews`}
          render={props => <MovieReviews movie={movie} {...props} />}
        />
        <nav className="navbar navbar-expand justify-content-center">
        <ul className="navbar-nav">
          <li className="nav-item">
          <Link className="nav-link text-black" to={`/movies/${id}`}>
              Details
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to={`/movies/${id}/credits`}>
              Cast & Credit
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-black" to="/movies/favorites">
              Similar Films
            </Link>
          </li>
        </ul>
      </nav>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
  </>
  );
};

export default withRouter(MoviePage);