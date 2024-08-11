import React from 'react'

const VideoCard = ({info}) => {
   
    const {snippet, statistics }= info;
    const {channelTitle, title, thumbnails} = snippet;
  return (
    <div className='m-2 p-2 w-72 shadow-md rounded-lg'>
        <img className='rounded-lg' src= {thumbnails.medium.url} alt="thumbnails" />
        <ul>
        <li className='font-bold py-2 text-sm'>{title}</li>
        <li className='font-extrabold'>{channelTitle}</li>
        <li>{statistics.viewCount/1000}K Views</li>
        </ul>

      
    </div>
  )
}

export default VideoCard;
