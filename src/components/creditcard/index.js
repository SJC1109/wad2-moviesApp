import React from "react";
import { Link } from "react-router-dom";
import "./credits.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = ({movie, credits, action}) => {

  return (
    <div className="col-sm-3">
      <div className="card  bg-white">
      <Link to={`/movies/${movie.id}/credits`}>
        <img
          className="card-img-tag center "
          alt={credits.name}
          src={
            credits.profile_path
              ? `https://image.tmdb.org/t/p/w500/${credits.profile_path}`
              : "./film-poster-placeholder.png"
          }
        />
        </Link>
        <div className="card-body">
          <h4 className="card-title ">{credits.name}</h4>
          <p>
            <FontAwesomeIcon icon={["fas", "calendar"]} />
            <span> {movie.release_date}</span>
          </p>
          <p>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span> {movie.vote_average}</span>
          </p>
        </div>
        <div className="card-footer">
           {action(movie)}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;