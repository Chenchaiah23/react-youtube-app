import React from 'react'

const SuggestVideoCard = (video) => {
    console.log(video.video)
    const {snippet, statistics} = video.video;
    const { title,thumbnails } = snippet;
  return (
    <div className='flex p-3'>
        <img src={thumbnails.medium.url} className='rounded-lg'/>
        <h2 className='overflow-hidden w-32 font-bold'>{title}</h2>
    </div>
  )
}

export default SuggestVideoCard