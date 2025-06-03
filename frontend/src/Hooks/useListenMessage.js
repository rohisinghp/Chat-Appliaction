import React from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversationStore from '../zustand/useConversation';
import { useEffect } from 'react';

const useListenMessage = () => {
  
   const {socket}= useSocketContext();
   const {messages, setMessages}= useConversationStore();

   useEffect(()=>{
    socket?.on("newMessage", (newMessage) => {
        setMessages([...messages, newMessage]);
    });
    
    return () => { 
        socket?.off("newMessage");
    }
   },[socket, setMessages, messages]);
}

export default useListenMessage