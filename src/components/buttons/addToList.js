import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToListButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToList = e => {
    e.preventDefault();
    context.addToList(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToList}
    >
      Add to List
    </button>
  );
};

export default AddToListButton;