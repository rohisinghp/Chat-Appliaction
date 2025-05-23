import React from 'react'
import {BsSend} from 'react-icons/bs'

const MessageInput = () => {
  return (
   <form action="" className='px-4 my-3'>
        <div className='w-full relative flex items-center'>
            <input type="text"
            className='border text-sm rounded-lg block  w-full p-2.5 bg-gray-700/50 ' placeholder='type...' />
            <button type="submit" className='absolute inset-y-0 end-0 pe-3'>
                <BsSend/>
            </button>
        </div>
   </form>
  )
}

export default MessageInput