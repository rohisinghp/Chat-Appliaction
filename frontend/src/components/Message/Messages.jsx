import React from 'react'
import Message from './message'
import useGetMessages from '../../Hooks/useGetMessages'
import useConversationStore from '../../zustand/useConversation'

const Messages = () => {
const {loading, messages} = useGetMessages()

// console.log(messages)

  return (
   
    <div className='flex flex-col px-4 overflow-auto'>
        {/* {
          messages.map((message)=>{
          <Message key={message._id} message={message}/>
          })
        } */}

        <Message/>
    
    </div>
  )
}

export default Messages