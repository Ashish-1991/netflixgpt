import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { addGptMovies } from "../utils/gptSlice";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.preferredLang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchInput = async () => {
    console.log(searchText.current.value);
    //Make an api call to gpt api to get movie recommendation
    const gptQueryPrompt =
      "Act as a movie recommendation system and suggest some movies for the query :" +
      searchText.current.value +
      " . only give me name of 5 movies comma separated like the example given ahead .Exmaple result : Gadar, sholay, koi mil gaya, golmaal, hera pheri";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQueryPrompt }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults?.choices[0]?.message?.content);
    const commaSeparatedGptMovies =
      gptResults?.choices[0]?.message?.content.split(",");

    const promiseArray = commaSeparatedGptMovies.map((movie) =>
      searchMovieTMDB(movie)
    );

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovies({
        movieName: commaSeparatedGptMovies,
        movieResults: tmdbResults,
      })
    );
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="bg-black w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9"
        ></input>
        <button
          className="p-4 m-4 rounded-md bg-red-500 col-span-3"
          onClick={handleGptSearchInput}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
