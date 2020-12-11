import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getSimilarMovies } from "../../api/tmdb-api";
import { excerpt } from "../../util";

export default ({ movie }) => {
  const [similars, setSimilars] = useState([]);

  useEffect(() => {
    getSimilarMovies(movie.id).then(similars => {
      setSimilars(similars);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Title</th>
          <th scope="col">release_date</th>
          <th scope="col">Leave words</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {similars.map(s => {
            return (
              <tr key={s.id}>
                <td><img width="100" height="150"
            src={`https://image.tmdb.org/t/p/w500/${s.poster_path}` }
            alt={s.title}
          /></td>
                <td>{s.title}</td>
                <td>{excerpt(s.release_date)}</td>
                <td>
                  {" "}
                  <Link
                    to={{
                      pathname: `/words/form`,
                      state: {
                        cast: s,
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
                      pathname: `/movies/${s.id}`,
                      state: {
                        similar: s,
                        movie: movie
                      }
                    }}
                  >
                    Details
                  </Link>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};