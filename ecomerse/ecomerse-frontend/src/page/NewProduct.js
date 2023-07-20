import React, { useState } from 'react'
import {BsCloudUpload} from 'react-icons/bs'; 
import ImageToBase64 from "../utility/imagetoBase64"
import { toast } from 'react-hot-toast';



const NewProduct = () => {

  const [data, setData] = useState({
    name: "", 
    category: "", 
    image: "", 
    price: "", 
    description: ""
  }); 

  const handleOnChange = (e) => {
    const {name, value} = e.target; 

    setData((preve)=>{
      return{
        ...preve, 
        [name] : value
      }
    })
  }



  const uploadImage = async(e) => {
    const data = await ImageToBase64(e.target.files[0]);
    // console.log(data);
    setData((preve)=>{
      return{
        ...preve, 
        image: data
      }
    });
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(data); 

    const {name, image, category, price} = data; 

    if(name && image && category && price){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/uploadProduct` , {
        method: "POST", 
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      }); 
      const fetchRes = await fetchData.json(); 
      console.log(fetchRes); 
      toast(fetchRes.message); 

      setData(()=>{
        return{
          name: "", 
          category: "", 
          image: "", 
          price: "", 
          description: ""
        }
      })

    }else{
      toast("Enter required fields"); 
    }

    

  } 



  return (
    <div className='p-4' >
      <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white' onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type={"text"} name='name' className='bg-slate-200 p-1 my-1' onChange={handleOnChange} value={data.name}/>

        <label htmlFor='category'>Category</label>
        <select className='bg-slate-200 p-1 my-1' name='category' onChange={handleOnChange} value={data.category}>
          <option value={"other"}>Select Category</option>
          <option value={"fruit"}>Fruits</option>
          <option value={"vegetable"}>Vegetables</option>
          <option value={"icecream"}>Iceream</option>
          <option value={"dosa"}>Dosa</option>
          <option value={"pizza"}>Pizza</option>
          <option value={"rice"}>Rice</option>

        </select>


        <label htmlFor='image'>Image
        <div className='h-40 w-full bg-slate-200 rounded flex items-center justify-center cursor-pointer'>
          {
            data.image ? <img src={data.image} className='h-full'/> : <span className='text-5xl'><BsCloudUpload /></span>
          }
          
          <input type={"file"} accept='image/*' id='image' onChange={uploadImage} className='hidden'/>
        </div>
        </label>
        

        <label htmlFor='price' className='my-1'>Price</label>
        <input type={"text"} className='bg-slate-200 p-1 my-1' name='price' onChange={handleOnChange} value={data.price}/>
        


        <label htmlFor='description'>Description</label>
        <textarea rows={3} className='bg-slate-200 p-1 my-1 resize-none' name='description' onChange={handleOnChange} value={data.description}/> 

        <button className='bg-red-500 hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow'>Save</button>
      </form>
    </div>
  )
}

export default NewProduct