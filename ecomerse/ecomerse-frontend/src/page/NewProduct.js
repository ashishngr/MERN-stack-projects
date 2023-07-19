import React, { useState } from 'react'
import {BsCloudUpload} from 'react-icons/bs'; 
import ImageToBase64 from "../utility/imagetoBase64"



const NewProduct = () => {

  const [data, setData] = useState({
    name: "", 
    category: "", 
    image: "", 
    price: ""
  })

  const uploadImage = async(e) => {
    console.log(e.target.files[0]);
    const data = await ImageToBase64(e.target.files[0]);
    console.log(data);
  }
  return (
    <div className='p-4' >
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white'>
        <label htmlFor='name'>Name</label>
        <input type={"text"} name='name' className='bg-slate-200 p-1 my-1'/>

        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1'>
          <option>Fruits</option>
          <option>Vegetables</option>
          <option>Iccream</option>
          <option>Dosa</option>
          <option>Pizza</option>
        </select>


        <label htmlFor='image'>Image
        <div className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'>
          <span className='text-5xl'><BsCloudUpload /></span>
          <img src={""}/>
          <input type={"file"} accept='image/*' id='image' onChange={uploadImage} className='hidden'/>
        </div>
        </label>
        

        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} className='bg-slate-200 p-1 my-1'/>
        


        <label htmlFor='description'>Description</label>
        <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none'/> 

        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
      </form>
    </div>
  )
}

export default NewProduct