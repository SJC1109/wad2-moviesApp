import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToTopListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToTopList = e => {
    e.preventDefault();
    context.addToTopList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToTopList}
    >
      Add to Top List
    </button>
  );
};

export default AddToTopListButton;