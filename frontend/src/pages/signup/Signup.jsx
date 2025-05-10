import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import UseSignup from '../../Hooks/UseSignup.js';


const Signup = () => {

  const {loading , signup} = UseSignup();

  const [inputs, setInputs] = useState({
    fullname: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const handleSubmit = async(e)=>{
    e.preventDefault();
    await signup(inputs);
    // setInputs({ fullname: '', username: '', password: '', confirmPassword: '', gender: '' });
  }

  const handleCheckboxChange = (gender) => {
    setInputs({ ...inputs, gender });
     
  }

  return (

    <div className='flex flex-col justify-center items-center  min-w-96 mx-auto rounded'>
      <div className='bg-gray-500/40 w-full backdrop-blur-lg p-6 rounded-xl shadow-md '>
        <h1 className='text-2xl font-bold text-center'>
          SignUp <span className='text-violet-500'>ChatApp</span>
        </h1>

        <form onSubmit={handleSubmit}>
        <div className='flex flex-col mt-2'>
            <label htmlFor="fullname">Fullname:</label>
            <input
              onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
             type="text" id="fullname" name="fullname" className='border border-gray-300 p-2 rounded' required />
          </div>

          <div className='flex flex-col mt-2'>
            <label htmlFor="username">Username:</label>
            <input 
            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            type="text" id="username" name="username" className='border border-gray-300 p-2 rounded' required />
          </div>

          <div className='flex flex-col mt-2'>
            <label htmlFor="password">Password</label>
            <input 
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            type="password" id="password" name="password" className='border border-gray-300 p-2 rounded' required />
          </div>

          <div className='flex flex-col mt-2'>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            type="password" id="confirmPassword" name="confirmPassword" className='border border-gray-300 p-2 rounded' required />
          </div>

          <GenderCheckBox onCheckboxChange ={handleCheckboxChange} selectedGender = {inputs.gender}/>

          <div className='flex flex-col mt-3'>
            <button type="submit" className='bg-violet-500 text-white p-2 rounded'>Sign Up</button>
          </div>


        </form>
        <p className="mt-4 text-center text-yellow-400">Already have an account?
          <Link to="/login" className="text-blue-100 underline">Login here
          </Link>
        </p>

      </div>

    </div>

  )
}


export default Signup;