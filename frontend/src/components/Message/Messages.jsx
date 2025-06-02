import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../Hooks/useGetMessages'
import useConversationStore from '../../zustand/useConversation'
import MessageSkeleton from '../skeletons/MessageSkeletons'

const Messages = () => {
const {loading, messages} = useGetMessages()
const lastMessageRef = useRef();

useEffect(() => {
  setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
  }, 100);
}, [messages])



  return (

    <div className='flex flex-col px-4 overflow-auto'>
        
        {loading && [...Array(3)].map((_, i) => (
            <MessageSkeleton key={i} />
        ))}

        {!loading && messages.length === 0 && (
          <p className='text-center'>Send a message to start a conversation</p>
        )}

        {!loading && messages.length > 0 && messages.map((message) => (
          // <Message
          //   key={message._id}
          //   message={message}
          // />
          <div key={message._id} 
          ref={lastMessageRef}>
            
            <Message message={message}/>
            </div>
        ))}

    </div>
  )
}

export default Messages   