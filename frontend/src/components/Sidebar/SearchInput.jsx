import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";


const SearchInput = () => {

  const [search, setSearch] = useState("");
  

  return (
    <form action="" className='flex items-center gap-2'>
        <input type="text" placeholder="Search..." className='input input-bordered rounded-full outline-none' />
        <button type="submit" className='btn btn-circle bg-sky-500 text-white'>
            <IoSearch className='text-xl'/>
        </button>
    </form>
  )
}

export default SearchInput