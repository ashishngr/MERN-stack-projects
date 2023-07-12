import React, { useState } from 'react'
import loginSignupImage from '../assest/login-animation.gif'; 
import {BiShow, BiHide} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom';
import { BsEmojiSmileUpsideDown } from 'react-icons/bs';


const Signup = () => {
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [data, setData] = useState({
        firstName: "", 
        lastName: "",
        email: "", 
        password: "", 
        confirmPassword: "",
    });
    console.log(data);
    
    const handleShowPassword =()  =>{
        setShowPassword(preve => !preve)
    }

    const handleShowConfirmPassword = () =>{
        setShowConfirmPassword(preve => !preve)
    }

    const handleChange = (e) => {
        const {name, value} = e.target; 
        setData((preve)=>{
            return {
                ...preve,
                [name]: value
            }
        })
    };

    const handleUploadProfileImage = (e) => {
        console.log(e.target.files[0]);
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {firstName, email, password, confirmPassword} = data; 
        if (firstName && email && password && confirmPassword) {
            if (password === confirmPassword) {
              // alert(dataRes.message);
                navigate("/login");
            }
            else {
              alert("password and confirm password not equal");
            }
        }else{
            alert("Required all field");
        }
    }
    
    
    

  return (
    <div className='p-3 md:p-4'>
        <div className='w-full max-w-sm bg-white m-auto flex flex-col p-4'>
            {/* <h1 className='text-center text-2xl font-bold'>Sign up</h1> */}
            <div className='w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative'>
                <label />
                <img src={loginSignupImage} className='w-full'/> 
                
                <label htmlFor='profileImage'>
                    <div className='absolute bottom-0 h-1/3 bg-slate-500 w-full text-center cursor-pointer '>
                        <p className='text-sm p-1 text-white'>Upoad</p>
                    </div>
                    <input type={'file'} id='profileImage' accept='image/*' className='hidden' onClick={handleUploadProfileImage}/>
                </label>

                
            </div>

            {/* Form content */}
            <form className='w-full py-3 flex flex-col' onSubmit={handleSubmit}>
                <label htmlFor='firstName' >First Name</label>
                <input type={"text"} id='firstName' name='firstName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
                value={data.firstName}
                onChange={handleChange}/>

                <label htmlFor='lastName'>Last Name</label>
                <input type={"text"} id='lastName' name='lastName' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300'
                value={data.lastName}
                onChange={handleChange}/>

                <label htmlFor='email'>Email</label>
                <input type={'email'} id='email' name='email' className='mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300' 
                value={data.email}
                onChange={handleChange}/>

                <label htmlFor='password'>Password</label>
                <div className='flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300'> 
                    <input type={showPassword ? "text":'password'} id='password' name='password' className='w-full bg-slate-200 border-none outline-none ' 
                    value={data.password}
                    onChange={handleChange}/>
                    <span className='flex text-4xl cursor-pointer' onClick={handleShowPassword}>{ showPassword ? <BiShow/> : <BiHide />}</span>
                </div> 

                <label htmlFor="confirmpassword">Confirm Password</label>
                <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2  focus-within:outline focus-within:outline-blue-300">
                    <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmpassword"
                    name="confirmPassword"
                    className=" w-full bg-slate-200 border-none outline-none "
                    value={data.confirmPassword}
                    onChange={handleChange}
                    />
                    <span
                    className="flex text-xl cursor-pointer"
                    onClick={handleShowConfirmPassword}
                    >
                    {showConfirmPassword ? <BiShow /> : <BiHide />}
                    </span>
                </div>

                <button className='w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center pu-1 rounded-full mt-4'>Sign up </button>
            </form>
            <p className='text-left text-sm mt-2'>Already have a account ? <Link to={"/login"} className='text-red-500 underline'>Login</Link></p>
        </div>
    </div>
  )
}

export default Signup