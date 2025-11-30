import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-36 absolute text-white bg-gradient-to-r from-black '>
        
    <h1 className='text-4xl font-bold'>{title}</h1>
    <p className='text-lg mt-4 w-1/4'>{overview}</p>
    <button className='bg-white-600 px-4 py-2 rounded mt-6 text-xl font-semibold hover:bg-red-700 transition'>▶Play</button>   
    <button style={{
  backgroundColor: 'gray',  // Netflix-red
  color: 'white',
  padding: '12px 20px',
  border: 'none',
  borderRadius: '4px',
  fontSize: '16px',
  fontWeight: '600',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  marginLeft: '20px'
}}>
  More Info
</button>

    </div>
    
  )
}

export default VideoTitle