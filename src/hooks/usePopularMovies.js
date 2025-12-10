import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import  {addPopularMovies } from '../utils/movieSlice';
import { API_OPTION } from '../utils/constants';


const usePopularMovies = () => {
      // Fetch tmdb now playing movies
  const dispatch= useDispatch();

  const getPopularMovies = async () => {
    const response= await fetch('https://api.themoviedb.org/3/movie/popular',API_OPTION);
    const data= await response.json();
    // console.log(data);
    dispatch(addPopularMovies(data.results))
  }

  useEffect(() => {
    getPopularMovies();
  }, []);
}

export default usePopularMovies;