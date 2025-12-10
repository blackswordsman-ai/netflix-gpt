import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggetions from './GptMovieSuggetions'
import { LOGO } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
                <img
                  src={LOGO}
                  alt="netflix-bg"
                />
              </div>
        <GptSearchBar />
        <GptMovieSuggetions />
    </div>
  )
}

export default GptSearch