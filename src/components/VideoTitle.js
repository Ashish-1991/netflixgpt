import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-36 px-12 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-400 text-white rounded-lg text-lg p-4 px-12 hover:opacity-50">
          ▶️ Play
        </button>
        <button className="mx-2 bg-gray-400 text-white rounded-lg text-lg p-4 px-12 ">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
