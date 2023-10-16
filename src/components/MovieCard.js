import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-52 pr-4">
      <img alt="movie_poster" src={IMG_CDN + posterPath} />
    </div>
  );
};

export default MovieCard;
