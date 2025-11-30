import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackround from './VideoBackround';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    // the movies is not present then return nothing
    if (movies === null) return;

    const mainMovie =movies[0];
    // console.log(mainMovie);
    const {original_title, overview,movieId} =mainMovie;
    

  return (
    <div>
    <VideoTitle title={original_title} overview={overview} />
    <VideoBackround movie={movieId} />
    </div>
 
  )
}

export default MainContainer