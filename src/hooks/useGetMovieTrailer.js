import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailor } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useGetMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const movieTrailor = useSelector((store) => store.movies.movieTrailer);

  const playMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      options
    );
    const json = await data.json();

    const trailer = json.results.filter((video) => video.type == "Trailer");

    const filterTrailer = trailer.length ? trailer[0] : json.results[0];

    dispatch(addMovieTrailor(filterTrailer));
  };

  useEffect(() => {
    //If the data is already there in redux slice , then do not make an API call
    if (!movieTrailor) playMovieTrailer();
  }, []);
};

export default useGetMovieTrailer;
