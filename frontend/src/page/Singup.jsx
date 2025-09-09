import React, { useState, useContext } from 'react';
import bg from "../assets/authBg.png";
import { IoEye, IoEyeOff } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { userDataContext } from "../context/Usercontext";  

function Singup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");
  const { serverUrl } = useContext(userDataContext);

  const handlesingup = async (e) => {
    e.preventDefault();
    try {
      let resultt = await axios.post(
        `${serverUrl}/api/Auth/singup`,
        { name, email, password },
        { withCredentials: true }
      );
      console.log(resultt.data);

      navigate("/Login");

    } catch (error) {
      console.error("Signup Error:", error.response?.data || error.message);
    }
  };

  return (
    <>
      <div 
        className='w-full h-[100vh] bg-cover flex justify-center items-center' 
        style={{ backgroundImage: `url(${bg})` }}
      >
        <form 
          className='w-120 h-150 max-w-[500px] bg-[#00000062] backdrop-blur-xs shadow-lg shadow-black flex flex-col px-[20px] justify-center items-center gap-[20px]' 
          onSubmit={handlesingup}   // ✅ yaha lagana zaroori hai
        >
          <h1 className='text-white font-semibold text-[30px]'>
            Register to <span className='text-blue-400'> Virtual Assistant</span>
          </h1>

          <input 
            type="text" 
            placeholder='Enter your Name' 
            className='w-full h-[60px] px-[20px] py-[10px] outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 p-4 rounded-full text-[18px]' 
            required 
            onChange={(e)=>setName(e.target.value)} 
            value={name}
          />

          <input 
            type="email" 
            placeholder='Enter your Email' 
            className='w-full outline-none border-2 border-white bg-transparent text-white placeholder-gray-300 p-4 rounded-full' 
            required 
            onChange={(e)=>setEmail(e.target.value)} 
            value={email}
          />

          <div className='w-full h-[60px] bg-transparent text-white text-[18px] relative'>
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder='Enter your Password' 
              className='w-full h-full outline-none border-2 rounded-full border-white bg-transparent placeholder-gray-300 px-[20px] py-[10px]' 
              required  
              onChange={(e)=>setPassword(e.target.value)}  
              value={password}                              
            />

            {!showPassword && (
              <IoEye 
                className='absolute top-[18px] text-white h-[25px] w-[25px] cursor-pointer right-[25px]' 
                onClick={()=>setShowPassword(true)} 
              />
            )}

            {showPassword && (
              <IoEyeOff 
                className='absolute top-[18px] text-white h-[25px] w-[25px] cursor-pointer right-[25px]' 
                onClick={()=>setShowPassword(false)} 
              />
            )}
          </div>

          <button 
            type="submit" 
            className='px-10 py-4 rounded-2xl text-[18px] bg-white text-black mt-8 font-semibold'
          >
            Sign Up
          </button>

          <p 
            className='text-white text-[18px] cursor-pointer' 
            onClick={()=>navigate("/Login")}
          > 
            Already have an account ? <span className='text-cyan-400'>Login</span>
          </p>
        </form>
      </div>
    </>
  )
}

export default Singup;
