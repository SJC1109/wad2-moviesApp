import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMovieCredits } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [casts, setCasts] = useState([]);

  useEffect(() => {
    getMovieCredits(movie.id).then(casts => {
      setCasts(casts);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">Character</th>
          <th scope="col">Leave words</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {casts.map(c => {
            return (
              <tr key={c.id}>
                <td><img width="100" height="150"
            src={`https://image.tmdb.org/t/p/w500/${c.profile_path}` }
            alt={c.name}
          /></td>
                <td>{c.name}</td>
                <td>{excerpt(c.character)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/words/form`,
                      state: {
                        cast: c,
                        movie: movie
                      }
                    }}
                  >
                    Leave words
                  </Link>
                </td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/credit/${c.credit_id}`,
                      state: {
                        cast: c,
                        movie: movie
                      }
                    }}
                  >
                    Information
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};