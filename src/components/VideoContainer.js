import React, { useEffect } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { useState } from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAllVideos } from '../utils/videosSlice';

const VideoContainer = () => {
  const [videos,setvideos] = useState([]);
  const dispatch = useDispatch();
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    //console.log(json);
    setvideos(json.items);
    dispatch(setAllVideos(json.items));
  }
  useEffect( () => {
    getVideos();
  },[]);
  return (
    <div className='flex flex-wrap'>
      {
        videos.map( video => (
        <Link to={"/watch?v="+video.id}><VideoCard vidInfo={video} key={video.id}/></Link>
        ))
      }
      
    </div>
  )
}

export default VideoContainer