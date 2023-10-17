import React from "react";
import { FaPlay } from "react-icons/fa6";
import { BiInfoCircle } from "react-icons/bi";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white w-screen aspect-video bg-gradient-to-tr from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/3">{overview}</p>
      <div className="flex items-center">
        <button className="bg-white text-black text-xl py-4 px-10 rounded-lg hover:bg-opacity-80">
          <div className="flex items-center">
            <FaPlay className="mr-1" size={25} />
            Play
          </div>
        </button>
        <button className="bg-gray-500 text-white mx-2 text-xl py-4 px-10 bg-opacity-50 rounded-lg hover:bg-opacity-80">
          <div className="flex items-center">
            <BiInfoCircle className="mr-2" size={30} />
            More Info
          </div>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
