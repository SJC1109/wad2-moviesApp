import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, topRatedMovies, now_PlayingMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        top_rated: [...state.top_rated]
      };
      case "add-watchlist":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchlist: true } : m
        ),
        movies: [...state.movies],
        top_rated: [...state.top_rated]
      };
      case "add-toplist":
        return {
          top_rated: state.top_rated.map((m) =>
            m.id === action.payload.movie.id ? { ...m, toplist: true } : m
          ),
          movies: [...state.movies],
          upcoming: [...state.upcoming]
        };
        case "add-now_playing":
        return {
          now_playing: state.now_playing.map((m) =>
            m.id === action.payload.movie.id ? { ...m, toplist: true } : m
          ),
          movies: [...state.movies],
          upcoming: [...state.upcoming]
        };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], top_rated: [...state.top_rated], now_playing: [...state.now_playing] };
    case "load-upcoming":
      return { upcoming: action.payload.movies, movies: [...state.movies], top_rated: [...state.top_rated], now_playing: [...state.now_playing] };
    case "load-top_rated":
      return { top_rated: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], now_playing: [...state.now_playing] };
      case "load-now_playing":
      return { now_playing: action.payload.movies, movies: [...state.movies], upcoming: [...state.upcoming], top_rated: [...state.top_rated] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
        top_rated: [...state.top_rated],
      };
      case "add-word":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? {...m, review: action.payload.word}
            : m
        ),
        upcoming: [...state.upcoming],
        top_rated: [...state.top_rated]
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], top_rated: [], now_playing: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };
  const addToWatchList = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchlist", payload: { movie: state.upcoming[index] } });
  };
  const addToTopList = (movieId) => {
    const index = state.top_rated.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-toplist", payload: { movie: state.top_rated[index] } });
  };
  const addToNow_playing = (movieId) => {
    const index = state.now_playing.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-now_playing", payload: { movie: state.now_playing[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };
  const addWord = (movie, word) => {
    dispatch({ type: "add-word", payload: { movie, word } });
  };
  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "load-upcoming", payload: { movies } });
    });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    topRatedMovies().then((movies) => {
      dispatch({ type: "load-top_rated", payload: { movies } });
    });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    now_PlayingMovies().then((movies) => {
      dispatch({ type: "load-now_playing", payload: { movies } });
    });
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        top_rated: state.top_rated,
        now_playing: state.now_playing,
        addToFavorites: addToFavorites,
        addReview: addReview,
        addWord: addWord,
        addToWatchList: addToWatchList,
        addToTopList: addToTopList,
        addToNow_playing: addToNow_playing
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;