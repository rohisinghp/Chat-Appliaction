import React, { useEffect } from 'react'
import Conversation from './Conversation'
import useGetConversation from '../../Hooks/useGetConversation'

const Conversations = () => {
  const { conversations, loading } = useGetConversation();

  console.log(conversations);

 
  
  return (
    <div className='flex flex-col py-2 overflow-auto'>
       {/* {conversations.forEach((item)=>{
        return (
          <Conversation key={item._id} conversation={item} />
        )
       })} */}

       {
         conversations.map((item, idx) => {
           return (
             <Conversation
              key={item._id}
              conversation={item}
              lastidx={idx === conversations.length - 1} />
           );
         })
       }
    </div>
  )
}

export default Conversations