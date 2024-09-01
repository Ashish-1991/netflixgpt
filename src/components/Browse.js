import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import useGetPopularMovies from "../hooks/useGetPopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  useGetPopularMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondryContainer />
    </div>
  );
};

export default Browse;
