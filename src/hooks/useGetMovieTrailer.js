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
    console.log(json.results);

    const trailer = json.results.filter((video) => video.type == "Trailer");
    console.log("Trailer types " + trailer);
    console.log(trailer);

    const filterTrailer = trailer.length ? trailer[0] : json.results[0];
    console.log(filterTrailer);

    dispatch(addMovieTrailor(filterTrailer));
  };

  useEffect(() => {
    playMovieTrailer();
  }, []);
};

export default useGetMovieTrailer;
