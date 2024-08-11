import React, { useEffect, useState } from 'react';
import {youtube_api} from "../utils/contants"
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import ButtonList from './ButtonList';

const VideoContainer = () => {
  const [videos, setvideos]= useState([]);
  useEffect(()=> {
    getVideos();
  }, []);

  const getVideos = async ()=> {
    const data= await fetch(youtube_api);
    const json = await data.json()
    setvideos(json.items)
  };

  return (
    <div className='flex flex-wrap w-[83vw] '>
      <ButtonList/>
     {videos.map((video)=> (
      <Link key={video.id}  to= {"/watch?v="+ video.id }> 
      <VideoCard info={video}/>
      </Link>
      ))}
    </div>
  )
}

export default VideoContainer;
