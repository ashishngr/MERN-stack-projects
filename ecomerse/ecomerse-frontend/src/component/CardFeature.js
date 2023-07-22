import React from 'react'

const CardFeature = ({image, name, category}) => {
  return (
    <div className='h-20'>
        <img src={image} className='h-full'/>
    </div>
  )
}

export default CardFeature