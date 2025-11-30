import useMovieTrailer from "../hooks/useMovieTrailer";
import { API_OPTION } from "../utils/constants";
import { useSelector  } from "react-redux";
import React from "react";


const VideoBackround = ({movieId}) => {
   
    const trailerVideo =useSelector(store => store.movies?.movieTrailer);
    // console.log(trailerVideo);
    useMovieTrailer(movieId)

  return (
    <div>
      <iframe
      className="w-screen aspect-video"
        src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?&autoplay=1&mute=1    " }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackround;
