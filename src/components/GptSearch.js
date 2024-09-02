import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieRecommendations from "./GptMovieRecommendations";
import { BG_IMG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_IMG_URL} alt="banner" />
      </div>

      <GptSearchBar />
      <GptMovieRecommendations />
    </div>
  );
};

export default GptSearch;
