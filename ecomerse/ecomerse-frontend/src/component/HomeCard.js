import React from 'react'

const HomeCard = ({name, image, category, price}) => {
  return (
    <div className='bg-white shadow p-2 rounded '>
        {
            name && 
            <>  
                <div className='w-40 min-h-[100]'>
                    <img src={image} className="h-full w-full"/>
                </div>
                <h3 className='font-semibold text-slate-600 text-center capitalize text-lg'>{name}</h3>
                <p className='text-center text-slate-500 text-medium'>{category}</p>
                <p className='text-center font-bold'><span className='text-red-500'>₹</span>{price}</p>
            </>
        }
    </div>
  )
}

export default HomeCard