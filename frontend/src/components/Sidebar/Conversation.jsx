import React from 'react'

const Conversation = ({ conversation, lastidx }) => {
    return (
        <>
            <div className='flex gap-2 items-center hover:bg-sky-500 rounded py-1 cursor-pointer p-2'>

                <div className='avatar avatar-online'>
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