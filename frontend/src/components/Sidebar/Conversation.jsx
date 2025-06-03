import React, { use, useEffect } from 'react'
import useConversationStore from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastidx }) => {

    const  {selectedConversations , setSelectedConversations}  = useConversationStore();
    const  {onlineUsers}= useSocketContext();
    const isOnline = onlineUsers.includes(conversation._id);

    const isSelected = selectedConversations?._id === conversation._id;

    useEffect(() => {

        return (
            () => {
                setSelectedConversations(null);
            } 
        )
    },[setSelectedConversations])

    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-sky-500 rounded py-1 cursor-pointer p-2
            ${isSelected ? 'bg-sky-500' : ''}`}
                onClick={() => setSelectedConversations(conversation)}>

                {/* <div className='avatar avatar-online'> */}

                <div className={`avatar avatar-${isOnline ? 'online' : ''} `}>
                    <div className='w-12 rounded-full'>
                        <img src={conversation.profilePic} alt="User Avatar" />
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div>
                        <p className='font-semibold'>{conversation.fullname}</p>
                    </div>
                    <div>
                        <p className='font-light text-sm'>Last Message Preview</p>
                    </div>
                </div>
            </div>

             {lastidx ?'' : <div className='divider my-0 py-0 h-1' />}

        </>
    )
}

export default Conversation