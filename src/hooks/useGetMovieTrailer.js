import { useDispatch } from "react-redux";
import { addMovieTrailor } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const useGetMovieTrailer = (id) => {
  const dispatch = useDispatch();

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
    playMovieTrailer();
  }, []);
};

export default useGetMovieTrailer;
