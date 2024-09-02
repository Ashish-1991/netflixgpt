import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div>
      {movies.nowPlayingMovies && (
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      )}
      {movies.popularMovies && (
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
      )}
      {movies.nowPlayingMovies && (
        <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
      )}
      {movies.nowPlayingMovies && (
        <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
      )}
    </div>
  );
};

export default SecondryContainer;
