import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTION } from '../utils/constants';


const useNowPlayingMovies = () => {
      // Fetch tmdb now playing movies
  const dispatch= useDispatch();

  const getNowPlayingMovies = async () => {
    const response= await fetch('https://api.themoviedb.org/3/movie/now_playing',API_OPTION);
    const data= await response.json();
    // console.log(data);
    dispatch(addNowPlayingMovies(data.results))
  }

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;