import React from 'react'
import GenderCheckBox from './GenderCheckBox';

 const Signup = () => {
  return (

    <div className='flex flex-col justify-center items-center  min-w-96 mx-auto rounded'>
       <div className='bg-gray-500/40 w-full backdrop-blur-lg p-6 rounded-xl shadow-md '>
        <h1 className='text-2xl font-bold text-center'>
          SignUp <span className='text-violet-500'>ChatApp</span>
        </h1>

<form>
        <div className='flex flex-col mt-2'>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" className='border border-gray-300 p-2 rounded' required />
       </div>

       <div className='flex flex-col mt-2'>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" className='border border-gray-300 p-2 rounded' required />
       </div>

       <div className='flex flex-col mt-2'>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" name="confirm-password" className='border border-gray-300 p-2 rounded' required />
       </div>

      <GenderCheckBox/>

       <div className='flex flex-col mt-3'>
        <button type="submit" className='bg-violet-500 text-white p-2 rounded'>Sign Up</button>
       </div>

       
</form>
<p className="mt-4 text-center text-yellow-400">Already have an account? <a href="#" className="text-blue-100 underline">Login here</a></p>

       </div>
      
    </div>
 
  )
}


export default Signup;