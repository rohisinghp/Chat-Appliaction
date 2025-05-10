import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col justify-center min-w-96 mx-auto'>

      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400/10 bg-clip-padding backdrop-filter backdrop-blur-lg '>
        <h1 className='text-3xl font-bold text-center text-violet-500'>Login
          <span className='text-violet-500 font-bold'> ChatApp</span>
        </h1>

        <form className='flex flex-col mt-5' action="">
          <div className='flex flex-col'>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" className="mt-2 p-2 bg-gray-500/80 rounded" required />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" className="mt-2 p-2 bg-gray-500/80 rounded" required />
          </div>
          <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">Login</button>
        </form>

        <p className="mt-4 text-center text-yellow-400">You Haven't account?
          <Link to="/signup" className="text-blue-100 underline">Create Account Here</Link></p>
      </div>

    </div>
  )
}

export default Login