import React from "react";
import MovieList from "./movieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movies);

  return (
    <div className="  bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies} />
      <MovieList title={"Trending Movies"} movies={movie.nowPlayingMovies} />
      <MovieList title={"Poupular Movies"} movies={movie.popularMovies} />
      <MovieList title={"Upcoming Movies"} movies={movie.nowPlayingMovies} />
      <MovieList title={"Horrer Movies"} movies={movie.nowPlayingMovies} />
      </div>
    </div>
    /*
    movie pouplar
    now playing movies
    trending 

     */
  );
};

export default SecondaryContainer;
