import React from 'react'
import Messages from './Messages'
import Header from './Header'
import MessageInput from './MessageInput'

const MessageContainer = () => {
  return (
    <div className='flex flex-col md:min-w-[450px]'>
          <Header/>

          <Messages/>
        <MessageInput/>
    </div>
  )
}

export default MessageContainer