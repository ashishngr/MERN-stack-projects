import React from 'react'
import {TbPlus, TbMinus} from 'react-icons/tb'
const CartProduct = ({id, name, image, category, qt, total, price }) => {
  return (
    <div className='bg-slate-200 p-2 flex '>
        <div className='p-3 bg-white rounded overflow-hidden'>
            <img src={image} className='h-28 w-36 object-cover '/>
        </div>
        <div className='flex flex-col gap-1'>
            <h3 className='font-semibold text-slate-600 capitalize text-lg md:text-xl'>{name}</h3>
            <p className='text-slate-500 text-base'>{category}</p>
            <p className='font-bold'><span className='text-red-500'>₹</span>{price}</p> 
            <div className='flex gap-3'>
              <button className='bg-slate-300 py-1 my-2 rounded hover:bg-slate-600 min-w-[100px] text-2xl'><TbPlus /></button>
              <button className='bg-slate-300 py-1 my-2 rounded hover:bg-slate-600 min-w-[100px]' onClick={" "}><TbMinus /></button>
            </div>
            
        </div>
    </div>
  )
}

export default CartProduct