import { API_OPTION } from '../utils/constants';
import React, { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { addMovieTrailer } from '../utils/movieSlice';



const useMovieTrailer = () =>{

const dispatch =useDispatch();
// fetch the trailer video and updating the store 
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/1084242/videos?language=en-US",
      API_OPTION
    );
    const videoData = await data.json();
    // console.log(videoData);

    const filterData = videoData.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterData.length ? filterData[0] : videoData.results[0];
    // console.log(trailer);

    dispatch(addMovieTrailer(trailer));
  };
  useEffect(() => {
    getMovieVideo();
  }, []);
}

export default useMovieTrailer;