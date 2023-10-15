import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white w-screen aspect-video border border-white bg-gradient-to-tr from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black text-xl py-4 px-10 rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 text-white mx-2 text-xl py-4 px-10 bg-opacity-50 rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
