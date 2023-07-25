import React from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import AllProduct from '../component/AllProduct';
import { addCartItem } from '../redux/productSlice';

const Menu = () => {
  const {filterby} = useParams(); 

  const dispatch  = useDispatch();


  const productData = useSelector((state)=> state.product.productList); 
  console.log("00",productData);  

  const productDisplay = productData.filter(el => el._id === filterby)[0]; 

  console.log("filter By", productDisplay); 

  const handleCartProduct = (e) =>{
    e.stopPropagation();
    dispatch(addCartItem(productDisplay))
}

  return (
    <div className='p-2 md:p-4'>
      <div className='w-full max-w-4x bg-white m-auto md:flex'>
        <div className='max-w-sm overflow-hidden w-full p-5'>
          <img src={productDisplay?.image} className='hover:scale-105 transition-all h-full'/>
        </div>
        <div className='flex flex-col gap-1'>
            <h3 className='font-semibold text-slate-600 capitalize text-2xl md:text-4xl'>{productDisplay?.name}</h3>
            <p className='text-slate-500 text-medium'>{productDisplay?.category}</p>
            <p className='font-bold'><span className='text-red-500 md:text-2xl'>₹</span>{productDisplay?.price}</p> 
            <div className='flex gap-3'>
              <button className='bg-yellow-300 py-1 my-2 rounded hover:bg-yellow-600 min-w-[100px] '>Buy</button>
              <button className='bg-yellow-300 py-1 my-2 rounded hover:bg-yellow-600 min-w-[100px]' onClick={handleCartProduct}>Add cart</button>
            </div>
            <div>
              <p className='text-slate-600 font-medium'>Descrption : </p>
              <p>{productDisplay?.description}</p>
            </div>
        </div>
      </div>
      <AllProduct heading={"Related Product"}/>
    </div>
  )
}

export default Menu