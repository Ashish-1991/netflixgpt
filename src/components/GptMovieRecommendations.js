import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieRecommendations = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;

  console.log(movieNames);
  console.log(movieResults);
  if (!movieNames) return null;

  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        {movieNames.map((movie, index) => (
          <MovieList title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieRecommendations;
