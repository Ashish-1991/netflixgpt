import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGetPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useGetPopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addGetPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default useGetPopularMovies;
