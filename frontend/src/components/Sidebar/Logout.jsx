import React, { useState } from 'react'
import { CiLogout } from "react-icons/ci";
import useLogout from '../../Hooks/useLogout.js';

const Logout = () => {

  const { logout } = useLogout()


  return (
    <div className='mt-auto'>
        <CiLogout className='w-6 h-6 cursor-pointer hover:text-sky-500'
        onClick={logout}/>
    </div>
  )
}

export default Logout