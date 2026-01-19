import React from 'react'

const TrailerCard = ({ysource}) => {
    console.log(ysource);
  return (
    <div className='w-screen h-screen aspect-video '>
      <iframe className='w-screen h-screen aspect-video' src={ysource} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default TrailerCard
