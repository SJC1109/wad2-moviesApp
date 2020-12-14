import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";

const AddToNow_playingButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToNow_playing = e => {
    e.preventDefault();
    context.addToNow_playing(movie.id);
  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToNow_playing}
    >
      Add to Now_playing
    </button>
  );
};

export default AddToNow_playingButton;