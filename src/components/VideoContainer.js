import React from "react";
import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoContainer = ({ id }) => {
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);

  useGetMovieTrailer(id);

  return (
    <div className="">
      <iframe
        className="w-screen aspect-video "
        src={
          "https://www.youtube.com/embed/" + trailerVideo?.key + "?&autoplay=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoContainer;
