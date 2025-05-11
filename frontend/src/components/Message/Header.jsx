import React from 'react'
import useConversationStore from '../../zustand/useConversation';

const Header = () => {
  const { selectedConversations } = useConversationStore();
  return (
    <div className='bg-slate-500/50 rounded px-4 py-2 mb-2'>
        <span className='label'>To: </span><span className='text-gray-900 font-bold'> {selectedConversations.fullname}</span>
    </div>
  )
}

export default Header