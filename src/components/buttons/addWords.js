import React from "react";
import { Link } from "react-router-dom";

const WordButton = ({ movie }) => {
  return (
    <Link
      className="btn w-100 btn-primary "
      to={{
        pathname: `/words/form`,
        state: {
          movie: movie
        }
      }}
    >
      Leave words
    </Link>
  );
};

export default WordButton;