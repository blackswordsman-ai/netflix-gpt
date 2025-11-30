import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer  from './SecondaryContainer';


const Browse = () => {

  useNowPlayingMovies();
  return (
    <div className='text-2xl '>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* {
      Main container for movies
      -VideoBackround
      -VideoTitle
      Secondary container for movies
      MovieListContainer
        -MovieList
          -MovieCard
            -MovieCardImage 
      } */}
    </div>
  )
}

export default Browse