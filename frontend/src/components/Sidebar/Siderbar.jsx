import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import Logout from './Logout'

const Siderbar = () => {
  return (
    <div className='flex flex-col p-4 border-r border-slate-500'>
        
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>

        <Logout/>
    </div>
  )
}

export default Siderbar