import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    console.log(movies);
    
    // Guard clause: return early if movies is null or empty
    if (!movies || movies.length === 0) {
        return null; // or return a loading state
    }
    
  return (
    <div className="px-6"  >
      <h1 className="text-4xl  text-white  py-4">{title}</h1>
      <div className="flex overflow-x-scroll p-6 ">
        
        <div className="flex">
          {movies.map( movie => <MovieCard key={movie.id} posterPath={movie.poster_path}  />)}
          
        </div>
      </div>
    </div>
  );
};

export default MovieList;