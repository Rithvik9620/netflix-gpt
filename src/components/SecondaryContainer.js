import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store.movies?.upComingMovies);
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  return (
    <div className="bg-black">
      <div className="-mt-64 relative z-20 pl-16">
        <MovieList title={"Now Playing"} movies={movies} />
        <MovieList title={"Trending"} movies={topRatedMovies} />
        <MovieList title={"Upcoming"} movies={upcomingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
