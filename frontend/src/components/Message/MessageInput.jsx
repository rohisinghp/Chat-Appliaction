import { useState } from 'react'
import {BsSend} from 'react-icons/bs'
import useSendMessage from '../../Hooks/useSendMessage'

const MessageInput = () => {

  const [message, setMessage] = useState("");
       const {loading, sendMessage} =  useSendMessage();


  const handleSubmit = async (e)=>{
     e.preventDefault();

      if(!message) return;
     if(loading) return;
     await sendMessage(message); 
     setMessage(""); 

  }
  return (

   <form action=""
   onSubmit={handleSubmit}
   className='px-4  mt-auto py-7'> 
        <div className='w-full relative flex items-center'>
            <input type="text"
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            className='border text-sm rounded-lg block w-full p-2.5 bg-gray-700/50 ' placeholder='type...' />
            <button type="submit" className='absolute inset-y-0 end-0 pe-3'>
                <BsSend/>
            </button>
        </div>
   </form>
  )
}

export default MessageInput 