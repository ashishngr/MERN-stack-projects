import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addCartItem } from '../redux/productSlice';
import { useDispatch } from 'react-redux';

const CardFeature = ({image, name, category, price, loading, id}) => {  
    const dispatch =  useDispatch(); 


    const navigat  = useNavigate(); 

    const handleClick = (e) => {
        navigat(`/menu/${id}`); 
        window.scrollTo({top: "0", behavior:"smooth"})

    }

    const handleCartProduct = (e) =>{
        e.stopPropagation();
        dispatch(addCartItem({
            _id: id, 
            name: name, 
            price: price,
            category: category, 
            image: image 
        }))
    }

  return (
    <div className='w-full min-w-[200px] max-w-[200px] bg-white hover:shadow-lg drop-shadow-lg py-5 px-4 cursor-pointer flex flex-col '>
        {
            image ? <> 
            <Link  onClick={(e)=>handleClick(e)}>
            
                <div className='h-28 flex flex-col justify-center items-center'>
                    <img src={image} className='h-full'/>
                </div>
                <h3 className='font-semibold text-slate-600 capitalize text-lg mt-4 whitespace-nowrap overflow-hidden'>{name}</h3>
                <p className=' text-slate-500 text-medium'>{category}</p>
                <p className='font-bold'>
                    <span className='text-red-500'>₹</span>
                    <span>{price}</span>    
                </p>
                </Link>   
                <button className='bg-yellow-300 py-1 my-2 rounded hover:bg-yellow-600 w-full' onClick={(e)=>handleCartProduct(e)}>Add Cart</button> 
             
            </> 
            : 
            <div className='min-h-[150px] flex justify-center items-center'>
                <p>{loading}</p>
            </div>
        }
    </div>
  )
}
export default CardFeature; 
