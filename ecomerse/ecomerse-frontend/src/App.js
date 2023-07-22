import React, {useEffect} from 'react';
import Header from './component/Header';
import './App.css';
import { Outlet } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import  {setDataProduct}  from "./redux/productSlice"; 


function App() { 

  const dispatch = useDispatch(); 
  const productData = useSelector((state) => state.product); 

  useEffect(()=>{
    (async()=>{
      const res = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/product`)
      const resData = await res.json(); 
      console.log(resData); 
      dispatch(setDataProduct(resData)); 


    })()
  }, [])
  console.log("product data", productData)


  return (
    <>
      <Toaster />

       <div>
        <Header />
        <main className='p-16 bg-slate-100 min-h-[calc(100vh)]'>
          <Outlet />
        </main>
      </div>
    </>
   
  );
}

export default App;
