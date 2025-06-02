import React, { useEffect } from 'react'
import Messages from './Messages'
import Header from './Header'
import MessageInput from './MessageInput'
import useConversationStore from '../../zustand/useConversation'

const MessageContainer = () => {

  const { selectedConversations, setSelectedConversations } = useConversationStore();

  useEffect(() => {
  
    return () => setSelectedConversations(null);
  }, [setSelectedConversations])
  
  return (
    <div className='flex flex-col md:min-w-[450px]'>
         {!selectedConversations ? <NoChatSelected/> : 
         <>
          <Header/>

          <Messages/>
        <MessageInput />
         </>
}
    </div>
  )
}

export default MessageContainer


const NoChatSelected = () => {

  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <img src="/images/empty-chat.png" alt="No chat selected" className='w-1/2' />
      <p className='text-gray-500'>Select a conversation to start chatting</p>
    </div>
  )
}